import React from 'react';

import { Coffee } from '@constants';
import './CofeeCard.less';

interface CardProps {
  coffee: Coffee;
  onPress: () => void;
  active: boolean;
}

export const CoffeeCard: React.FC<CardProps> = ({
  coffee,
  onPress,
  active,
}: CardProps) => (
  <div className={active ? 'card card-active' : 'card'} onClick={onPress}>
    <div className="card__img">
      <picture>
        <source srcSet={coffee.image} />
        <img src={coffee.fallbackImage} alt="Coffee" />
      </picture>
    </div>
    <h4>{coffee.name}</h4>
  </div>
);
