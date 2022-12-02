import React from 'react';
import dog from '../../../assets/Dog.png'
import Close from '../../../assets/close-icon.svg';

import classes from './CartPreview.module.css';

const CartPreview = ({onClosePreview}) => {
  return (
    <div className={classes.cartList}>
      <div className={classes.close}>
        <img onClick={onClosePreview} src={Close} alt="close-icon" />
      </div>
      <div className={classes.cartItem}>
        <div className={classes.cartText}>
          <h6>Samurai King Resting</h6>
          <p>$10000.00</p>
        </div>
        <div className={classes.cartImg}>
          <img src={dog} alt="A dog resting on the floor" />
        </div>
      </div>
      <div className={classes.btnBox}>
        <button>CLEAR</button>
      </div>
    </div>
  );
};

export default CartPreview;
