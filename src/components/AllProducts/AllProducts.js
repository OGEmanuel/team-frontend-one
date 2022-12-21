import nextId from 'react-id-generator';

import first from '../../assets/redBench.png';
import second from '../../assets/eggBalloon.png';
import third from '../../assets/Man.png';
import fourth from '../../assets/Architecture.png';

import classes from './AllProducts.module.css';
import Products from './Products';
import { useState } from 'react';

const ALL_PRODUCTS = [
  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: '101.00',
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: '100.00',
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: '93.89',
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: '3.89',
  },
];

const AllProducts = () => {
  const [products, setProducts] = useState(ALL_PRODUCTS);

  const handleFilter = filteredProducts => {
    const newProducts = ALL_PRODUCTS.map(pro => pro).filter(pro =>
      filteredProducts.includes(pro.description)
    );
    if (newProducts.length > 1) {
      setProducts(newProducts);
    } else {
      setProducts(ALL_PRODUCTS);
    }
  };

  const handlePriceFilter = filteredPrice => {
    if (filteredPrice.includes('Lower than $20')) {
      const priceFiltered = products
        .map(pro => pro)
        .filter(pro => pro.price < 20);
      console.log(priceFiltered);
    }
    if (filteredPrice.includes('$20 - $100')) {
      const priceFiltered = products
        .map(pro => pro)
        .filter(pro => pro.price >= 20 && pro.price <= 100);
      console.log(priceFiltered);
    }
  };

  return (
    <section className={classes['all-products']}>
      <Products
        onFilter={handleFilter}
        onPriceFilter={handlePriceFilter}
        products={products}
      />
    </section>
  );
};

export default AllProducts;
