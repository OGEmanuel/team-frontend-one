import TitleBar from './TitleBar';

import close from '../../assets/Close.svg';

import classes from './Filter.module.css';
import { Fragment } from 'react';

const DESCRIPTION = {
  List: [
    { des: 'People' },
    { des: 'Premium' },
    { des: 'Pets' },
    { des: 'Food' },
    { des: 'Landmarks' },
    { des: 'Cities' },
    { des: 'Nature' },
  ],
};

const PRICE = {
  List: [
    { pri: 'Lower than $20' },
    { pri: '$20 - $100' },
    { pri: '$100 - $200' },
    { pri: 'More than $200' },
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
          <ul className={classes.description}>
            {DESCRIPTION.List.map((list, index) => (
              <li key={index}>
                <label className={classes.box} htmlFor={`check-${index}`}>
                  {list.des}
                  <input
                    type="checkbox"
                    id={`check-${index}`}
                    name={list.des}
                    value={list.des}
                  />
                  <span
                    className={classes.checkmark}
                    id={`check-${index}`}
                  ></span>
                </label>
              </li>
            ))}
          </ul>

          <div className={classes['filter-nav']}>
            <p className={classes.price}>Price range</p>
          </div>
          <ul>
            {PRICE.List.map((list, index) => (
              <li key={index + 10}>
                <label className={classes.box} htmlFor={`check-${index + 10}`}>
                  {list.pri}
                  <input
                    type="checkbox"
                    id={`check-${index + 10}`}
                    name={list.pri}
                    value={list.pri}
                  />
                  <span
                    className={classes.checkmark}
                    id={`check-${index}`}
                  ></span>
                </label>
              </li>
            ))}
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
