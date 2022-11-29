import { Fragment } from 'react';
import nextId from 'react-id-generator';

import first from '../../assets/redBench.png';
import second from '../../assets/eggBalloon.png';
import third from '../../assets/Man.png';
import fourth from '../../assets/Architecture.png';
import Button from '../UI/Button';

import classes from './Products.module.css';

const ALL_PRODUCTS = {
  List: [
    {
      id: nextId(),
      image: first,
      description: 'People',
      name: 'Red Bench',
      price: '$3.89',
    },

    {
      id: nextId(),

      image: second,
      description: 'Food',
      name: 'Egg Balloon',
      price: '$93.89',
    },

    {
      id: nextId(),

      image: third,
      description: 'People',
      name: 'Man',
      price: '$100.00',
    },

    {
      id: nextId(),

      image: fourth,
      description: 'Landmarks',
      name: 'Architecture',
      price: '$101.00',
    },
  ],
};

const bestSeller = <p className={classes.tag}>Best Seller</p>;

const Products = () => {
  return (
    <Fragment>
      {ALL_PRODUCTS.List.map(list => (
        <div className={classes.products} key={list.id}>
          {list.image === first && bestSeller}
          <div className={classes.image}>
            <img src={list.image} alt={list.name} />
          </div>
          <Button className={classes.button}>ADD TO CART</Button>
          <p className={classes.description}>{list.description}</p>
          <p className={classes.name}>{list.name}</p>
          <p className={classes.price}>{list.price}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Products;
