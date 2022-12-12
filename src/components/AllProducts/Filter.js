import nextId from 'react-id-generator';
import TitleBar from './TitleBar';

import close from '../../assets/Close.svg';

import classes from './Filter.module.css';
import { Fragment } from 'react';
import FilterItems from './FilterItems';

const DESCRIPTION = {
  List: [
    { id: nextId(), des: 'People' },
    { id: nextId(), des: 'Premium' },
    { id: nextId(), des: 'Pets' },
    { id: nextId(), des: 'Food' },
    { id: nextId(), des: 'Landmarks' },
    { id: nextId(), des: 'Cities' },
    { id: nextId(), des: 'Nature' },
  ],
};

const PRICE = {
  List: [
    { id: nextId(), des: 'Lower than $20' },
    { id: nextId(), des: '$20 - $100' },
    { id: nextId(), des: '$100 - $200' },
    { id: nextId(), des: 'More than $200' },
  ],
};

const Filter = props => {
  const handleClick = () => {
    props.setFilter(false);
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <TitleBar filter={props.filter} onSetFilter={props.setFilter} />
      </div>
      <form>
        <div className={classes.filter}>
          <div className={classes['filter-nav']}>
            <p>Filter</p>
            <img onClick={handleClick} src={close} alt="" />
          </div>
          <ul>
            <div className={classes.span}>
              <FilterItems items={DESCRIPTION.List} />
            </div>
          </ul>
          <div className={classes['filter-nav']}>
            <p className={classes.price}>Price range</p>
          </div>
          <ul>
            <FilterItems items={PRICE.List} />
          </ul>
        </div>
        <div className={classes['button-box']}>
          <button>CLEAR</button>
          <button className={classes.save}>SAVE</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Filter;
