import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Home from './views/Home';
import Header from './components/Header';
import AddCar from './views/AddCar';
import AllCar from './views/AllCar';
import UpdateCar from './views/UpdateCar';
import Search from './views/Search';
import CarDetails from './views/CarDetails';
function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list"  element={<AllCar />}/>
        <Route path="/add" element={<AddCar />}/>
        <Route path="/edit/:carId" element={<UpdateCar />}/>
        <Route path="/detail/:carId" element={<CarDetails />}/>
        <Route path="/search/:search" element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;
