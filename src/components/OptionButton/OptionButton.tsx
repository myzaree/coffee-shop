import React from 'react';

import './OptionButton.less';

interface OptionProps {
  title: string;
  onPress: () => void;
  active: boolean;
}

export const OptionButton: React.FC<OptionProps> = ({
  title,
  onPress,
  active,
}: OptionProps) => (
  <span
    className={active ? 'option active-option' : 'option'}
    onClick={onPress}
  >
    {title}
  </span>
);
