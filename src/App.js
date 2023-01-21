import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './storage/cartContext';
import ItemListByCategory from './components/FilterByNavbar/ItemListByCategory';
import CartContainer from './components/CartContainer/CartContainer';
import FilterByNavbar from './components/FilterByNavbar/FilterByNavbar';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='details/:productid' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryid' element={<ItemListByCategory/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
