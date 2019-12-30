import { Machine, assign } from "xstate";

const loadState = {
  initial: "loading",
  states: {
    loading: {
      after: {
        3000: "failure.timeout"
      },
      on: {
        RESOLVE: "success",
        REJECT: "failure",
        TIMEOUT: "failure.timeout"
      }
    },
    success: {
      on: {
        RENDER: "window.render"
      }
    },
    failure: {
      initial: "rejection",
      states: {
        rejection: {
          meta: {
            message: "The request has been rejected."
          }
        },
        timeout: {
          meta: {
            message: "The request has been timed out."
          }
        }
      },
      meta: {
        category: "HTTP Error"
      }
    }
  }
};

const modalState = {
  initial: "show",
  states: {
    show: {
      on: {
        CLOSE: "close"
      }
    },
    close: {}
  }
};

const renderState = {
  initial: "rendered",
  states: {
    rendered: {
      on: {
        SHOW_MODAL: "modal"
      }
    },
    modal: {
      ...modalState
    }
  }
};

export const windowMachine = Machine({
  id: "window",
  initial: "prepare",
  context: {
    id: undefined,
    windowTitle: "",
    windowType: ""
  },
  on: {
    PREPARE: {
      target: ".prepare"
    }
  },
  states: {
    prepare: {
      on: {
        LOAD: {
          target: "load",
          actions: [
            assign((context, event) => ({ ...context, ...event.value }))
          ]
        }
      }
    },
    load: {
      ...loadState
    },
    render: {
      ...renderState
    }
  }
});
