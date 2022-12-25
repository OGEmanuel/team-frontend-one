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
    price: 3.89,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: 3.89,
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: 3.89,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: 3.89,
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: 3.89,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: fourth,
    description: 'Landmarks',
    name: 'Architecture',
    price: 101.0,
  },

  {
    id: nextId(),
    image: third,
    description: 'People',
    name: 'Man',
    price: 100.0,
  },

  {
    id: nextId(),
    image: second,
    description: 'Food',
    name: 'Egg Balloon',
    price: 93.89,
  },

  {
    id: nextId(),
    image: first,
    description: 'People',
    name: 'Red Bench',
    price: 3.89,
  },
];

const AllProducts = () => {
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [sort, setSort] = useState(false);

  const handleSort = () => {
    if (sort) {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    return;
  };
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
      const checked = products.map(pro => pro).filter(pro => pro.price < 20);
      setProducts(checked);
      if (checked.length < 1) {
        setProducts(ALL_PRODUCTS);
      }
    }

    if (filteredPrice.includes('$20 - $100')) {
      const checked2 = products
        .map(pro => pro)
        .filter(pro => pro.price >= 20 && pro.price <= 100);
      setProducts(checked2);
      if (checked2.length < 1) {
        setProducts(ALL_PRODUCTS);
      }
    }

    if (filteredPrice.includes('$100 - $200')) {
      const checked3 = products
        .map(pro => pro)
        .filter(pro => pro.price >= 100 && pro.price <= 200);
      setProducts(checked3);
      if (checked3.length < 1) {
        setProducts(ALL_PRODUCTS);
      }
    }

    if (filteredPrice.includes('Lower than $200')) {
      const checked4 = products.map(pro => pro).filter(pro => pro.price < 200);
      setProducts(checked4);
      if (checked4.length < 1) {
        setProducts(ALL_PRODUCTS);
      }
    }
  };

  return (
    <section className={classes['all-products']}>
      <Products
        onSort={handleSort}
        sort={sort}
        setSort={setSort}
        onFilter={handleFilter}
        onPriceFilter={handlePriceFilter}
        products={products}
      />
    </section>
  );
};

export default AllProducts;
