
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsPage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;