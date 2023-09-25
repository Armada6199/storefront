import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';

function Cart(props) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary" 
            gutterBottom
            textTransform={'uppercase'}
            marginTop={'40px'}
          >
           Your Cart
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Checkout
          </Typography>
        </Container>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="40%"
        height="40%"
        margin="auto"
        bgcolor="#fefefe"
        borderRadius="16px"
        boxShadow="10px 10px #eee"
        padding="20px" 
      >
        <List
          direction="row"
          gap="15px"
          justifyContent="center"
          sx={{ width: '100%' }}
          flexWrap="wrap"
          margin="auto"
          marginY="20px" 
        >
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span style={{ fontWeight: '700' }}>Item</span>
            <span style={{ fontWeight: '700' }}>Price$</span>
          </ListItem>
          {props.cart.cart?.map((product) => (
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>{product.name}</span>
              <span>{product.price}$</span>
            </ListItem>
          ))}
        </List>

        <Typography textAlign="center" fontWeight="700">
          Total{' '}
          {Math.floor(
            props.cart.cart?.reduce((a, b) => a + b.price, 0)
          )}
          $
        </Typography>
        <Box marginTop="30px">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom textAlign="center">
               Your home address
              </Typography>
              <Box display="flex" flexDirection="column">
                <TextField id="name" name="name" label="Full Name" margin="normal" />
                <TextField id="city" name="city" label="City" margin="normal" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Payment Information
              </Typography>
              <Box display="flex" flexDirection="column">
                <TextField
                  label="Expiration"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
                <TextField id="cc_number" name="cc_number" label="Credit Card #" margin="normal" />
                <TextField id="cvv" name="cvv" label="CVV" margin="normal" />
              </Box>
              <Button
                variant="contained"
                color="primary" 
                fullWidth
                onClick={() => alert('Thank you for your purchase')}
                style={{ marginTop: '20px' }} 
              >
               Order Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer,
});

export default connect(mapStateToProps)(Cart);
