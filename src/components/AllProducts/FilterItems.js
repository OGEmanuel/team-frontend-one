import { Fragment } from 'react';
import classes from './FilterItems.module.css';

const FilterItems = props => {
  return (
    <Fragment>
      {props.items.map(items => (
        <li key={items.id}>
          <label className={classes.box} htmlFor={`check-${items.id}`}>
            {items.des}
            <input
              type="checkbox"
              id={`check-${items.id}`}
              name={items.des}
              value={items.des}
            />
            <span className={classes.checkmark} id={`check-${items.id}`}></span>
          </label>
        </li>
      ))}
    </Fragment>
  );
};

export default FilterItems;
