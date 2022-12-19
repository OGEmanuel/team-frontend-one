import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Pagination from './Pagination';

import first from '../../assets/redBench.png';
import Button from '../UI/Button';

import classes from './Products.module.css';
import Filter from './Filter';
import TitleBar from './TitleBar';

const productsPerPage = 4;
const bestSeller = <p className={classes.tag}>Best Seller</p>;

const Products = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);

  const products = props.products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const visibleProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <Fragment>
      {!filter && <TitleBar filter={filter} onSetFilter={setFilter} />}

      {filter && (
        <div className={classes.filter}>
          <Filter setFilter={setFilter} filter={filter} />
        </div>
      )}

      {visibleProducts.map(list => (
        <div className={classes.products} key={list.id}>
          {list.image === first && bestSeller}
          <div className={classes.image}>
            <Link
              to="/all-products/single-product"
              state={{
                category: list.description,
                name: list.name,
                src: list.image,
              }}
              className={classes.name}
            >
              <img src={list.image} alt={list.name} />
            </Link>
          </div>
          <Button className={classes.button}>ADD TO CART</Button>
          <p className={classes.description}>{list.description}</p>
          <p className={classes.name}>{list.name}</p>
          <p className={classes.price}>{list.price}</p>
        </div>
      ))}

      <Pagination
        products={products}
        curPage={currentPage}
        setCurPage={setCurrentPage}
        proPerPage={productsPerPage}
      />
    </Fragment>
  );
};

export default Products;
