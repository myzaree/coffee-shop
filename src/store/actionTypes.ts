export enum Types {
  SetCoffee = 'SET_COFFEE',
  SetSize = 'SET_SIZE',
  AddOption = 'ADD_OPTION',
  RemoveOption = 'REMOVE_OPTION',
  AddHistory = 'ADD_HISTORY',
  RemoveHistory = 'REMOVE_HISTORY',
  ResetCoffee = 'RESET_COFFEE',
}

// eslint-disable-next-line
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
