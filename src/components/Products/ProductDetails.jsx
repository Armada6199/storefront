import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../Reducers/CartReducer';

function ProductDetail(props) {
  const { id } = useParams();
  function handleAddToCart(product) {
    let found = props.cart.cart.filter((element) => element.name === product.name);
    console.log(found)
    if (found.length===0) {
      props.addToCart(product);
    } else return;
  }
  const selectedProduct = props.productManager.categoryReducer.products?.find(
    (product) => product['_id'] === id
  );

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f2f2f2', 
  };

  const paperStyle = {
    padding: '20px',
    margin: '20px auto',
    width: '80%',
    maxWidth: '600px',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
        >
          Product Detail
        </Typography>
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h4" color="textPrimary" paragraph>
            {selectedProduct ? selectedProduct.name.toUpperCase() : ''}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={selectedProduct ? selectedProduct.image : ''}
                alt={selectedProduct ? selectedProduct.name : ''}
                style={{ maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                Description:  
                {selectedProduct ? selectedProduct.description : ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                Stock:
                {selectedProduct ? selectedProduct.inStock : ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                Catagory:
                {selectedProduct ? selectedProduct.category : ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                Price:
                {selectedProduct ? selectedProduct.price : ''}
              </Typography>
            </Grid>
            <Button onClick={() => handleAddToCart(selectedProduct)} color={'primary'}>Add to Cart</Button>

          </Grid>
        
        </Paper>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productManager: state,
  cart: state.cartReducer,

});
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
