import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {
  setActiveCategory,
  setCategories,
  setProducts,
  setRenderList,
} from '../../Reducers/CategoryReducer';
import { addToCart, removeFromCart } from '../../Reducers/CartReducer';

function Items(props) {
  const { product, price, inStock, name, removeFromCart } = props;

  const cardStyle = {
    width: '300px',
    backgroundColor: '#f0f0f0', // Change the background color
  };

  const mediaStyle = {
    height: '200px',
  };

  const centerTextStyle = {
    textAlign: 'center',
  };

  return (
    <Box>
      <Card style={cardStyle}>
        <CardMedia
          component="img"
          image={`https://source.unsplash.com/random?${name}`}
          style={mediaStyle}
        />
        <CardContent style={centerTextStyle}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">Price: ${price}</Typography>
          <Typography variant="body1">Stock: {inStock}</Typography>
        </CardContent>
        <CardActions style={centerTextStyle}>
          <Button onClick={() => removeFromCart(product)} color="primary">
            Remove From Cart
          </Button>
          <Button color="primary">More Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  productManager: state.categoryReducer,
  cart: state.cartReducer,
});

const mapDispatchToProps = {
  setActiveCategory,
  setCategories,
  setProducts,
  setRenderList,
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
