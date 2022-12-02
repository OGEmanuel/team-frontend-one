import React from 'react';
import AllProducts from './components/AllProducts/AllProducts';
import Navbar from './components/Navbar/Navbar';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  return (
    <>
      <Navbar />
      <AllProducts />
      <SingleProduct />
    </>
  );
}

export default App;
