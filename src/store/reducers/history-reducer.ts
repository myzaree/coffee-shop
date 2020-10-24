/* eslint-disable import/no-cycle */
import { Coffee, Size, Option } from '@constants';
import { Types, ActionMap } from '../actionTypes';
import { CoffeeActions } from './coffee-reducer';

export type History = {
  id: number;
  coffee: Coffee;
  size: Size;
  options: Option[];
  place: 'С собой' | 'В кафе';
  totalPrice: number;
};

type HistoryPayload = {
  [Types.AddHistory]: {
    history: History;
  };
  [Types.RemoveHistory]: {
    id: number;
  };
};

export type HistoryActions = ActionMap<HistoryPayload>[keyof ActionMap<
  HistoryPayload
>];

export const historyReducer = (
  state: History[],
  action: CoffeeActions | HistoryActions
): History[] => {
  switch (action.type) {
    case Types.AddHistory:
      return [...state, action.payload.history];
    case Types.RemoveHistory:
      return [...state.filter((h) => h.id !== action.payload.id)];
    default:
      return state;
  }
};
