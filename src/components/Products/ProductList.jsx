import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Stack } from '@mui/material';
import axios from 'axios';
import {
  setActiveCategory,
  setCategories,
  setProducts,
  setRenderList,
} from '../../Reducers/CategoryReducer';
import Product from './Product';
import { categories,products } from '../../constants';
function ProductList(props) {
  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      try {
       //mock an api reqeust to fetch the constants from another file 
       console.log(categories,products)
        props.setCategories(categories[0].results);
        props.setProducts(products[0].results);
        props.setActiveCategory('electronics');
      } catch (err) {
        console.log(err);
      }
    }

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
});

const mapDispatchToProps = {
  setActiveCategory,
  setCategories,
  setProducts,
  setRenderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
