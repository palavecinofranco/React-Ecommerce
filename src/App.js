import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import { CartProvider } from './storage/cartContext';
import ItemListByCategory from './pages/ProductsPage';
import CartContainer from './components/CartContainer/CartContainer';
import ItemListWithFilter from './pages/ProductsPage';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import Footer from './components/Footer/Footer';
import { exportArray } from './services/firebase';
import PurchaseCompleted from './components/PurchaseCompleted/PurchaseCompleted';
import Swal from 'sweetalert2'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <HeaderSlider/>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='details/:productid' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryid' element={<ItemListByCategory/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/productos' element={<ItemListWithFilter/>}/>
          <Route path='/completed-purchase/:orderid' element={<PurchaseCompleted/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
