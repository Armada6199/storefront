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
        name: "burger",
        category: "office",
        inStock: 1222,
        price: 5,
        description:'burger to eat ',
        image:'https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Pizza",
        category: "food",
        inStock: 53238,
        description:'pizza to eat ',
        image:'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        price: 33,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Cookies",
        category: "food",
        inStock: 920,
        image:'https://plus.unsplash.com/premium_photo-1668784197038-072eff0d0c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        price:1,
        description:'cookies to eat ',

        __v: 0,
      },
      {
        _id: uuid(),
        name: " TV",
        category: "electronics",
        image:'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        inStock: 321,
        description:'tv to watch',
        price: 999,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "iPad",
        category: "electronics",
        inStock: 200,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description:'to waste your time  ',

        price: 1231,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Pants",
        category: "clothes",
        inStock: 3,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description:'pants to wear everyday',

        price: 33,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Jeans",
        category: "clothes",
        inStock: 4,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description:'jeans to wear each day',

        price: 11,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "Monopoly",
        category: "games",
        inStock: 33,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description:'game to play it takes hours to finish ',

        price: 22,
        __v: 0,
      },
      {
        _id: uuid(),
        name: " counter strike ",
        category: "games",
        inStock: 1,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description:'old but gold  ',

        price: 321,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "sword",
        category: "weapons",
        inStock: 2,
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        price:5300,
        description:'to defind your self  ',

        __v: 0,
      },
      {
        _id: uuid(),
        name: "Knife",
        category: "weapons",
        inStock: 222,
        description:'to defind your self ',
        image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        price: 324,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "camera",
        category: "electronics",
        description:'to save your memories  ',
        image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80',
        price: 234,
        inStock: 323,
        __v: 0,
      },
      {
        _id: uuid(),
        name: "TV",
        category: "electronics",
        price: 555,
        image:'',
        inStock: 233,
        description:'to watch movies and football ',

        __v: 0,
      },
      {
        _id: uuid(),
        name: "Banana",
        category: "food",
        price: 33,
        description:'healthy and eat it in the morning  ',
        inStock: 43,
        image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80',
        __v: 0,
      },
    ],
  },
];
