import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Stack } from '@mui/material';
import axios from 'axios';
import {
  setActiveCategory,
  setCategories,
  setProducts,
  setRenderList,
  getProducts
} from '../../Reducers/CategoryReducer';
import Product from './Product';
import { categories,products } from '../../constants';
function ProductList(props) {
  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      try {
        let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`)
        console.log(data.data.results);
        props.setCategories(data.data.results);
        props.setProducts(products[0].results);
        props.setActiveCategory('electronics');
      } catch (err) {
        console.log(err);
      }
    }
    props.getProducts(props.productManager.categoryReducer.activeCategory)
    fetchCategoriesAndProducts();
  }, [props.setCategories, props.setProducts, props.setActiveCategory]);

  useEffect(() => {
    async function setToRenderProducts() {
      try {
        const toRender = props.productManager.categoryReducer.products.filter(
          (element) =>
            element.category === props.productManager.categoryReducer.activeCategory
        );
        props.setRenderList(toRender);
      } catch (err) {
        console.log(err);
      }
    }
    setToRenderProducts();
  }, [
    props.productManager.categoryReducer.activeCategory,
    props.productManager.categoryReducer.products,
    props.setRenderList,
  ]);

  return (
    <div style={{ minHeight: '70vh' }}>
      <Stack
        direction={'row'}
        gap={'15px'}
        justifyContent='center'
        flexWrap={'wrap'}
        width='80%'
        margin={'auto'}
        marginY={'50px'}
      >
        {props.productManager.categoryReducer.toRender.map((product) => (
          <Product
            key={product['_id']}
            name={product.name}
            category={product.category}
            inStock={product.inStock}
            price={product.price}
            product={product}
          />
        ))}
      </Stack>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productManager: state,
  cart: state.cartReducer
});

const mapDispatchToProps = {
  setActiveCategory,
  setCategories,
  setProducts,
  getProducts,
  setRenderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
