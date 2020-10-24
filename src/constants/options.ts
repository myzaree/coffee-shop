export type OptionType = 'milk' | 'syrup' | 'cream' | 'shot';

export type Option = {
  type: OptionType;
  title: string;
  price: number;
};

export const MilkList: Option[] = [
  { type: 'milk', title: 'Безлактозное', price: 250 },
  { type: 'milk', title: 'Кокосовое', price: 250 },
  { type: 'milk', title: 'Миндальное', price: 250 },
  { type: 'milk', title: 'Овсяное', price: 250 },
  { type: 'milk', title: 'Соевое', price: 250 },
];

export const SyrupList: Option[] = [
  { type: 'syrup', title: 'Ванильный', price: 250 },
  { type: 'syrup', title: 'Ирландский Крем', price: 250 },
  { type: 'syrup', title: 'Карамельный', price: 250 },
  { type: 'syrup', title: 'Кокосовый', price: 250 },
  { type: 'syrup', title: 'Малиновый', price: 250 },
  { type: 'syrup', title: 'Миндальный', price: 250 },
  { type: 'syrup', title: 'Мятный', price: 250 },
  { type: 'syrup', title: 'Ореховый', price: 250 },
  { type: 'syrup', title: 'Сахарный', price: 250 },
];

export const CreamList: Option[] = [
  { type: 'cream', title: 'Обычные', price: 250 },
  { type: 'cream', title: 'Взбитые', price: 250 },
];

export const EspressoShots: Option[] = [
  { type: 'shot', title: 'Эспрессо Роаст', price: 250 },
  { type: 'shot', title: 'Декаф Эспрессо', price: 250 },
  { type: 'shot', title: 'Блонд Эспрессо', price: 250 },
];
