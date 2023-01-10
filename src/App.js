import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FilterByNavbar from './components/FilterByNavbar/FilterByNavbar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <FilterByNavbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='details/:productid' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryid' element={<ItemListContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
