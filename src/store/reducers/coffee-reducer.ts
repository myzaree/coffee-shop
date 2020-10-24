/* eslint-disable import/no-cycle */
import { Coffee, Size, Option, OptionType } from '@constants';
import { Types, ActionMap } from '../actionTypes';
import { HistoryActions } from './history-reducer';

type CoffeePayload = {
  [Types.SetCoffee]: {
    coffee: Coffee;
  };
  [Types.SetSize]: {
    size: Size;
  };
  [Types.AddOption]: {
    option: Option;
  };
  [Types.RemoveOption]: {
    optionType: OptionType;
  };
};

export type CoffeeActions = ActionMap<CoffeePayload>[keyof ActionMap<
  CoffeePayload
>];

export interface CoffeeState {
  current: Coffee | null;
  size: Size | null;
  options: Option[];
}

export const coffeeReducer = (
  state: CoffeeState,
  action: CoffeeActions | HistoryActions
): CoffeeState => {
  switch (action.type) {
    case Types.SetCoffee:
      if (!state.current || state.current !== action.payload.coffee) {
        return {
          current: action.payload.coffee,
          size: null,
          options: [],
        };
      }
      return state;
    case Types.SetSize:
      return {
        ...state,
        size: action.payload.size,
      };
    case Types.AddOption: {
      const filteredOptions = state.options.filter(
        (opt) => opt.type !== action.payload.option.type
      );
      filteredOptions.push(action.payload.option);
      return {
        ...state,
        options: filteredOptions,
      };
    }
    case Types.RemoveOption: {
      const filteredOptions = state.options.filter(
        (opt) => opt.type !== action.payload.optionType
      );
      return {
        ...state,
        options: filteredOptions,
      };
    }
    default:
      return state;
  }
};
