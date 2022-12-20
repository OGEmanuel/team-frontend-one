import { useState } from 'react';
import { Fragment } from 'react';
import classes from './FilterItems.module.css';

const FilterItems = props => {
  const [checked, setChecked] = useState([]);

  const handleToggle = item => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.onFilter(newChecked);
  };

  return (
    <Fragment>
      {props.items.map(items => (
        <li key={items.id}>
          <label className={classes.box} htmlFor={`check-${items.id}`}>
            {items.des}
            <input
              onChange={() => handleToggle(items.des)}
              type="checkbox"
              id={`check-${items.id}`}
              name={items.des}
              value={items.des}
              checked={checked.indexOf(items.des) === -1 ? false : true}
            />
            <span className={classes.checkmark} id={`check-${items.id}`}></span>
          </label>
        </li>
      ))}
    </Fragment>
  );
};

export default FilterItems;
