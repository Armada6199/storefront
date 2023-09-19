import { v4 as uuid } from "uuid";
export const categories = [
  {
    count: 4,
    results: [
      {
        _id: uuid(),
        name: "food",
        description: "Eat healthy",
        __v: 0,
      },
      {
        _id: uuid(),
        name: "electronics",
        description: "smart watches,phones... and more ",
        __v: 0,
      },
  
    ],
  },
];
export const products = [
  {
    count: 14,
    results: [
      {
        _id: uuid(),
        name: "Stickies",
        category: "office",
        inStock: 1222,
        price: 5,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Pizza",
        category: "food",
        inStock: 53238,
        price: 33,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Cookies",
        category: "food",
        inStock: 920,
        price:1,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Plasma TV",
        category: "electronics",
        inStock: 321,
        price: 999,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "iPad",
        category: "electronics",
        inStock: 200,
        price: 1231,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Fancy Pants",
        category: "clothes",
        inStock: 3,
        price: 33,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Green Jeans",
        category: "clothes",
        inStock: 4,
        price: 11,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Monopoly",
        category: "games",
        inStock: 33,
        price: 22,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Smash Bros",
        category: "games",
        inStock: 1,
        price: 321,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Samurai Sword",
        category: "weapons",
        inStock: 2,
        price:5300,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Knife",
        category: "weapons",
        inStock: 222,
        price: 324,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "camera",
        category: "electronics",
        price: 234,
        inStock: 323,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "TV",
        category: "electronics",
        price: 555,
        inStock: 233,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Banana",
        category: "food",
        price: 33,
        inStock: 43,
        __v: 0,
      },
    ],
  },
];