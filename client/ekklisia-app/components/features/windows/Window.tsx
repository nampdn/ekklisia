import React from "react";
import { Layout, Text, Button } from "react-native-ui-kitten";

import { useMachine } from "@xstate/react";

import { windowMachine } from "../../../xstate";

export interface WindowProps {
  children: React.ReactChild;
}

export const Window = ({ children }: WindowProps) => {
  const [current, send] = useMachine(windowMachine);
  return (
    <Layout>
      <Text>This is a Window</Text>
      {current.matches("render") && <Text>Render</Text>}
      {current.matches("load") && (
        <Layout>
          {current.matches("load.failure") && <Text>Load failed</Text>}
          {current.matches("load.loading") && <Text>Loading</Text>}
        </Layout>
      )}
      <Button
        onPress={() => {
          send("LOAD", { windowTitle: "GI 3:16", windowType: "BIBLE" });
        }}
      >
        Load
      </Button>
      {children}
    </Layout>
  );
};
