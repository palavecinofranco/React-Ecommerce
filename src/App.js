import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import { CartProvider } from './storage/cartContext';
import ProductsPage from './pages/ProductsPage';
import CartContainer from './components/CartContainer/CartContainer';
import ItemListWithFilter from './pages/ProductsPage';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import Footer from './components/Footer/Footer';
import { exportArray } from './services/firebase';
import PurchaseCompleted from './components/PurchaseCompleted/PurchaseCompleted';
import NavNavigation from './components/NavBar/NavNavigation';
import FilteredItemList from './components/FilteredItemList/FilteredItemList';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
        <HeaderSlider/>
        <NavNavigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='details/:productid' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryid' element={<ProductsPage/>}/>
          <Route path=':genero/:generocategory' element={<FilteredItemList/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/productos' element={<ItemListWithFilter/>}/>
          <Route path='/completed-purchase/:orderid' element={<PurchaseCompleted/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </BrowserRouter>
    <button onClick={exportArray}>Export</button>
    </>
  );
}

export default App;
