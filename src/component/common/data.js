const categoryList = [
  {
    name: 'Women',
    catImg: require('../../assets/img/cat_women.jpg'),
    gColors: ['rgba(100,182,255,.75)', 'rgba(132,102,234,.75)'],
    catId: '01',
  },
  {
    name: 'Men',
    catImg: require('../../assets/img/cat_men.jpg'),
    gColors: ['rgba(255, 88, 88, .75)', 'rgba(251, 88, 149, .75)'],
    catId: '02',
  },
  {
    name: 'Baby',
    catImg: require('../../assets/img/cat_baby.jpg'),
    gColors: ['rgba(67, 233, 123, .75)', 'rgba(56, 249, 215, .75)'],
    catId: '03',
  },
];
const ItemList = [
  {
    name: 'Women T-Shirt',
    img: require('../../assets/img/women_1.png'),
    id: '01',
    price: 55.0,
    tags: ['best_sell'],
    catId: '01',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Women T-Shirt',
    img: require('../../assets/img/women_2.png'),
    id: '02',
    price: 35.0,
    tags: ['best_sell', 'fetured'],
    catId: '01',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Women T-Shirt',
    img: require('../../assets/img/cart_1.png'),
    id: '03',
    price: 55.0,
    tags: [],
    catId: '01',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Women T-Shirt',
    img: require('../../assets/img/cart_2.png'),
    id: '04',
    price: 55.0,
    tags: [],
    catId: '01',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Men T-Shirt',
    img: require('../../assets/img/men_1.jpg'),
    id: '05',
    price: 155.0,
    tags: ['best_sell', 'fetured'],
    catId: '02',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Men T-Shirt',
    img: require('../../assets/img/men_2.png'),
    id: '06',
    price: 55.0,
    tags: [],
    catId: '02',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Men T-Shirt',
    img: require('../../assets/img/men_3.png'),
    id: '07',
    price: 55.0,
    tags: ['fetured'],
    catId: '02',
    brand: 'Lotto Ltd.',
  },
  {
    name: 'Baby T-Shirt',
    img: require('../../assets/img/baby_1.png'),
    id: '08',
    price: 55.0,
    tags: [],
    catId: '03',
    brand: 'Lotto Ltd.',
  },
];

export {categoryList, ItemList};
