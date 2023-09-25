import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { addToCart } from '../../Reducers/CartReducer';
import { Link } from 'react-router-dom';

function Product(props) {
  function handleAddToCart(product) {
    console.log(product);
    let found = props.cart.cart.filter((element) => element.name === product.name);
    if (!found[0]) {
      props.addToCart(product);
    } else return;
  }

  return (
    <Box bgcolor={'#eeeeee'} width={'600px'} height={'400px'}>
      <Card>
        <CardMedia component={'img'} image={`https://source.unsplash.com/random?${props.name}`} height={'200px'} />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h5'>{props.product.name}</Typography>
          <Typography variant='body1'>Price: {props.price}$</Typography>
          <Typography variant='body1'>Stock: {props.inStock}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button onClick={() => handleAddToCart(props.product)} color={'primary'}>Add to Cart</Button>
          <Button color={'primary'} component={Link} to={`/product/${props.product._id}`}>More Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
