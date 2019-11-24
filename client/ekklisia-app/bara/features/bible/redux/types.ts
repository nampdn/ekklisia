export interface BibleState {
  id: string;
  dam_id: string;
  book_code: string;
  chapter_order: string;
  selected_verses: number[];
  loading: boolean;
  loaded: boolean;
}

export interface BibleStoreState {
  cache: {
    [k: string]: string;
  };
  store: {
    [k: string]: BibleState;
  };
}

export const BIBLE_ACTION_TYPE = "BIB";

const createBibleAction = (name: string) => {
  return `${BIBLE_ACTION_TYPE}::${name}`;
};

export const LOAD_TEXT = createBibleAction("LOAD_TEXT");
export const CACHE_TEXT = createBibleAction("CACHE_TEXT");
export const NEW_BIBLE = createBibleAction("NEW_BIBLE");

export interface LoadTextAction {
  type: typeof LOAD_TEXT;
  payload: {
    dam_id: string;
    text: string;
  };
}

export interface CacheTextAction {
  type: typeof CACHE_TEXT;
  payload: {
    dam_id: string;
    text: string;
  };
}

export interface NewBibleAction {
  type: typeof NEW_BIBLE;
  payload: {
    id: string;
    dam_id: string;
  };
}

export type BibleActionTypes =
  | LoadTextAction
  | CacheTextAction
  | NewBibleAction;
