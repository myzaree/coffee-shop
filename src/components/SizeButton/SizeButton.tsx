import React from 'react';

import './SizeButton.less';

interface SizeButtonProps {
  title: string;
  price: number;
  active: boolean;
  onPress: () => void;
}

export const SizeButton: React.FC<SizeButtonProps> = ({
  title,
  price,
  active,
  onPress,
}: SizeButtonProps) => (
  <div className={active ? 'size  active-size' : 'size'} onClick={onPress}>
    <span className="size__title">{title}</span>
    <span className="size__price">{price}₸</span>
  </div>
);
