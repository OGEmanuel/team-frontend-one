import nextId from 'react-id-generator';
import TitleBar from './TitleBar';

import close from '../../assets/Close.svg';

import classes from './Filter.module.css';
import { Fragment } from 'react';
import FilterItems from './FilterItems';

const DESCRIPTION = [
  { id: nextId(), des: 'People' },
  { id: nextId(), des: 'Premium' },
  { id: nextId(), des: 'Pets' },
  { id: nextId(), des: 'Food' },
  { id: nextId(), des: 'Landmarks' },
  { id: nextId(), des: 'Cities' },
  { id: nextId(), des: 'Nature' },
];

const PRICE = [
  { id: nextId(), des: 'Lower than $20' },
  { id: nextId(), des: '$20 - $100' },
  { id: nextId(), des: '$100 - $200' },
  { id: nextId(), des: 'Lower than $200' },
];

const Filter = props => {
  const handleClick = () => {
    props.setFilter(false);
  };

  const filterChangeHandler = selected => {
    props.onFilter(selected);
  };

  const filterPrice = selected => {
    props.onFilterPrice(selected);
  };

  const mobileCategoryFilterHandler = selected => {
    props.onFilter(selected);
  };

  const mobilePriceFilter = selected => {
    props.onFilterPrice(selected);
  };

  const submitHandler = e => {
    e.preventDefault();
    props.setFilter(false);
  };

  const clearHandler = () => {
    window.location.reload();
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <TitleBar filter={props.filter} onSetFilter={props.setFilter} />
      </div>
      <form onSubmit={e => submitHandler(e)}>
        <div className={classes.filter}>
          <div className={classes['filter-nav']}>
            <p>Filter</p>
            <img onClick={handleClick} src={close} alt="" />
          </div>
          <div className={classes['filter-tag']}>
            <p>Category</p>
          </div>
          <ul>
            <div className={classes.span}>
              <FilterItems
                onMobile={mobileCategoryFilterHandler}
                onFilter={filterChangeHandler}
                items={DESCRIPTION}
              />
            </div>
          </ul>
          <div className={classes['filter-nav']}>
            <p className={classes.price}>Price range</p>
          </div>
          <div className={classes['filter-tag']}>
            <p>Price range</p>
          </div>
          <ul>
            <FilterItems
              onMobile={mobilePriceFilter}
              onFilter={filterPrice}
              items={PRICE}
            />
          </ul>
        </div>
        <div className={classes['button-box']}>
          <button type="button" onClick={clearHandler}>
            CLEAR
          </button>
          <button type="submit" className={classes.save}>
            SAVE
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Filter;
