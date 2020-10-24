export type Size = {
  title: string;
  price: number;
};

export type Coffee = {
  name: string;
  sizes: Size[];
  image: string;
  fallbackImage: string;
};

export const CoffeeList: Coffee[] = [
  {
    name: 'Эспрессо',
    image: 'images/espresso.webp',
    fallbackImage: 'images/espresso.jpg',
    sizes: [
      { title: 'Соло', price: 600 },
      { title: 'Допио', price: 700 },
    ],
  },
  {
    name: 'Капучино',
    image: 'images/cappuccino.webp',
    fallbackImage: 'images/cappuccino.jpg',
    sizes: [
      { title: 'Толл', price: 1100 },
      { title: 'Гранде', price: 1200 },
      { title: 'Венти', price: 1300 },
    ],
  },
  {
    name: 'Американо',
    image: 'images/americano.webp',
    fallbackImage: 'images/americano.jpg',
    sizes: [
      { title: 'Толл', price: 900 },
      { title: 'Гранде', price: 1000 },
      { title: 'Венти', price: 1100 },
    ],
  },
  {
    name: 'Латте',
    image: 'images/latte.webp',
    fallbackImage: 'images/latte.jpg',
    sizes: [
      { title: 'Толл', price: 1100 },
      { title: 'Гранде', price: 1200 },
      { title: 'Венти', price: 1300 },
    ],
  },
  {
    name: 'Мокка',
    image: 'images/mocha.webp',
    fallbackImage: 'images/mocha.jpg',
    sizes: [
      { title: 'Толл', price: 1300 },
      { title: 'Гранде', price: 1400 },
      { title: 'Венти', price: 1500 },
    ],
  },
  {
    name: 'Флэт Уайт',
    image: 'images/flat-white.webp',
    fallbackImage: 'images/flat-white.jpg',
    sizes: [
      { title: 'Толл', price: 1200 },
      { title: 'Гранде', price: 1300 },
      { title: 'Венти', price: 1400 },
    ],
  },
];
