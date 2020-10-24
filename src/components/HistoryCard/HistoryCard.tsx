import React from 'react';

import { History } from '@store';
import { OptionButton } from '@components';
import './HistoryCard.less';

const optionTitle = {
  milk: 'молоко',
  syrup: 'сироп',
  cream: 'сливки',
  shot: '',
};

interface HCardProps {
  history: History;
  deleteHistory: () => void;
}

export const HistoryCard: React.FC<HCardProps> = ({
  history,
  deleteHistory,
}) => {
  const { coffee, size, options, totalPrice, place } = history;
  return (
    <div className="hCard">
      <div className="hCard__img">
        <picture>
          <source srcSet={coffee.image} />
          <img src={coffee.fallbackImage} alt="Coffee" />
        </picture>
      </div>
      <div className="hCard__content">
        <h5>
          {coffee.name} {size.title}
        </h5>
        <div className="hCard__options">
          {options.map((opt) => (
            <OptionButton
              title={`${opt.title} ${optionTitle[opt.type]}`}
              onPress={() => {}}
              active={false}
            />
          ))}
        </div>
        <div className="hCard__options">
          <p>Потрачено: {totalPrice}₸</p>
          <p>Место: {place}</p>
        </div>
      </div>
      <span className="delete" onClick={deleteHistory}>
        Delete
      </span>
    </div>
  );
};
