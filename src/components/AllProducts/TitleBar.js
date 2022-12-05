import classes from './TitleBar.module.css';

import filter from '../../assets/filter.png';

const TitleBar = props => {
  const handleClick = () => {
    props.onSetFilter(!props.filter);
  };

  return (
    <div className={classes['title-bar']}>
      <p className={classes.title}>
        <span className={classes['main-title']}>Photography</span>{' '}
        <span className={classes.slash}>/</span>{' '}
        <span className={classes['sub-title']}>Premium Photos</span>
      </p>
      <img onClick={handleClick} src={filter} alt="filter" />
    </div>
  );
};

export default TitleBar;
