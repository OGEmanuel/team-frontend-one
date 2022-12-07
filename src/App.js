import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

//Implement lazy loading
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const AllProducts = React.lazy(() =>
  import('./components/AllProducts/AllProducts')
);
const SingleProduct = React.lazy(() =>
  import('./components/SingleProduct/SingleProduct')
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='loading'><p>Loading...</p></div>}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="account" />
          <Route path="/" element={<Navigate to="/all-products" />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/cart" />
          <Route path="/checkout" />
          <Route path="/review" />
          <Route path="/contact" />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
