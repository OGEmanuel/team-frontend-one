import { Fragment, useState } from 'react';

import Pagination from './Pagination';

import first from '../../assets/redBench.png';

import classes from './Products.module.css';
import Filter from './Filter';
import TitleBar from './TitleBar';

const productsPerPage = 6;
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

  const handleFilter = filtered => {
    props.onFilter(filtered);
  };
  const handlePriceFilter = filteredPrice => {
    props.onPriceFilter(filteredPrice);
  };
  return (
    <Fragment>
      <div className={classes.mobile}>
        {!filter && <TitleBar filter={filter} onSetFilter={setFilter} />}

        {filter && (
          <div className={classes.filter}>
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        )}
      </div>

      <div className={classes.container}>
        <div className={classes['title-bar__desktop']}>
          <TitleBar filter={filter} onSetFilter={setFilter} />
        </div>

        <div className={classes['filter-desktop']}>
          <Filter
            setFilter={setFilter}
            filter={filter}
            onFilter={handleFilter}
            onFilterPrice={handlePriceFilter}
          />
        </div>

        <div className={classes.content}>
          <div className={classes.box}>
            {visibleProducts.map(list => (
              <div className={classes.products} key={list.id}>
                {list.image === first && bestSeller}
                <div className={classes.image}>
                  <img src={list.image} alt={list.name} />
                </div>
                <button className={classes.button}>ADD TO CART</button>
                <p className={classes.description}>{list.description}</p>
                <p className={classes.name}>{list.name}</p>
                <p className={classes.price}>${list.price}</p>
              </div>
            ))}
          </div>

          <Pagination
            products={products}
            curPage={currentPage}
            setCurPage={setCurrentPage}
            proPerPage={productsPerPage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
