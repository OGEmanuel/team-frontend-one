import classes from './TitleBar.module.css';

import filter from '../../assets/filter.png';
import sort from '../../assets/sort.svg';
import arrow from '../../assets/arrow-down.svg';

const TitleBar = props => {
  const handleSort = () => {
    props.onSort(props.setSort(!props.sort));
  };

  const handleClick = () => {
    props.onSetFilter(!props.filter);
  };

  return (
    <div className={classes['title-bar']}>
      <p className={classes.title}>
        <span className={classes['main-title']}>Photography</span>
        <span className={classes.slash}>/</span>
        <span className={classes['sub-title']}>Premium Photos</span>
      </p>
      <div>
        <img
          className={classes.filter}
          onClick={handleClick}
          src={filter}
          alt="filter"
        />
        <div className={classes['sort-box']}>
          <div className={classes.sort}>
            <img src={sort} alt="" onClick={handleSort} />
            <p className={classes['sub-title']}>Sort By</p>
          </div>
          <div className={classes.sort}>
            <p className={classes['main-title']}>Price</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
