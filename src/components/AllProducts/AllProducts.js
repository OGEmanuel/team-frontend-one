import filter from '../../assets/filter.png';

import classes from './AllProducts.module.css';
import Products from './Products';

const AllProducts = () => {
  return (
    <section className={classes['all-products']}>
      <div className={classes['title-bar']}>
        <p className={classes.title}>
          Photography / <span>Premium Photos</span>
        </p>
        <img src={filter} alt="filter" />
      </div>
      <Products />
    </section>
  );
};

export default AllProducts;
