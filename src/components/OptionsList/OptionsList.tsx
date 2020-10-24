import React, { useContext } from 'react';
import { AppContext, Types } from '@store';

import { Option, OptionType } from '@constants';
import { OptionButton } from '../OptionButton/OptionButton';
import './OptionsList.less';

interface OptionsListProps {
  list: Option[];
  listTitle: string;
  listType: OptionType;
}

export const OptionsList: React.FC<OptionsListProps> = ({
  list,
  listTitle,
  listType,
}: OptionsListProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { options } = state.coffee;
  return (
    <div className="list">
      <div className="list__title">
        <h5>{listTitle}:</h5>
        <span
          onClick={() =>
            dispatch({
              type: Types.RemoveOption,
              payload: { optionType: listType },
            })
          }
        >
          Удалить
        </span>
      </div>
      <div className="list__content">
        {list.map((item) => (
          <OptionButton
            title={item.title}
            active={options.some((opt) => opt.title === item.title)}
            onPress={() =>
              dispatch({ type: Types.AddOption, payload: { option: item } })
            }
          />
        ))}
      </div>
    </div>
  );
};
