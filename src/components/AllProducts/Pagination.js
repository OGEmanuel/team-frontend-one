import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

import classes from './Pagination.module.css';

const Pagination = props => {
  const numOfTotalPages = Math.ceil(props.products.length / props.proPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const prevPageHandler = () => {
    if (props.curPage !== 1) props.setCurPage(props.curPage - 1);
    if (props.curPage === 1) props.setCurPage(props.curPage * numOfTotalPages);
  };

  const nextPageHandler = () => {
    if (props.curPage !== numOfTotalPages) props.setCurPage(props.curPage + 1);
    if (props.curPage === numOfTotalPages)
      props.setCurPage(props.curPage - (props.curPage - 1));
  };

  return (
    <div className={classes.pagination}>
      <span onClick={prevPageHandler}>
        <img src={left} alt="" />
      </span>
      <p>
        {pages.map(page => (
          <span
            key={page}
            onClick={() => props.setCurPage(page)}
            className={props.curPage === page ? classes.active : ''}
          >
            {page}
          </span>
        ))}
      </p>
      <span onClick={nextPageHandler}>
        <img src={right} alt="" />
      </span>
    </div>
  );
};

export default Pagination;
