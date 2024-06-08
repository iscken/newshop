import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Favorit from './components/Favorit';
import Admin from './components/Admin';
import Obj from './components/NewObj';
import Modal from './components/Modal';
import ProductCart from './components/ProductCart';
import Search from './components/search/Search';
import { useState } from 'react';
import GetAdmin from './components/getAdmin';

function App() {
  const [value, setValue] = useState("")

  return (
    <div className="App">
    <Header setValue= {setValue}/>
    <Routes>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      <Route path='/Favorit' element={<Favorit/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Obj' element={<Obj/>}/>
      <Route path='/GetAdmin' element={<GetAdmin/>}/>
      <Route path='/Modal' element={<Modal/>}/>
      <Route path='/ProductCart/:proId' element={<ProductCart/>}/>
      <Route path='/Search' element={<Search value = {value}/>}/>


    </Routes>
    </div>
  );
}

export default App;
