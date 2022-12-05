import nextId from 'react-id-generator';

import first from '../../assets/redBench.png';
import second from '../../assets/eggBalloon.png';
import third from '../../assets/Man.png';
import fourth from '../../assets/Architecture.png';

import classes from './AllProducts.module.css';
import Products from './Products';

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

    {
      id: nextId(),
      image: fourth,
      description: 'Landmarks',
      name: 'Architecture',
      price: '$101.00',
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
      image: second,
      description: 'Food',
      name: 'Egg Balloon',
      price: '$93.89',
    },

    {
      id: nextId(),
      image: first,
      description: 'People',
      name: 'Red Bench',
      price: '$3.89',
    },

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

    {
      id: nextId(),
      image: fourth,
      description: 'Landmarks',
      name: 'Architecture',
      price: '$101.00',
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
      image: second,
      description: 'Food',
      name: 'Egg Balloon',
      price: '$93.89',
    },

    {
      id: nextId(),
      image: first,
      description: 'People',
      name: 'Red Bench',
      price: '$3.89',
    },
  ],
};

const AllProducts = () => {
  return (
    <section className={classes['all-products']}>
      {/* <TitleBar /> */}
      <Products products={ALL_PRODUCTS.List} />
    </section>
  );
};

export default AllProducts;
