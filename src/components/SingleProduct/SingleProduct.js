import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';
import cart from '../../assets/shopping-cart.svg';
import dog from '../../assets/Dog.png';
import yellow from '../../assets/Yellow-wall.png';
import wallFlower from '../../assets/wall-flower.png';
import Balloon from '../../assets/Balloon.png';
import CartPreview from './CartPreview/CartPreview';

import classes from './SingleProduct.module.css';

const SingleProduct = () => {
  const [previewCart, setPreviewCart] = useState(false);

  const showCartHandler = () => {
    setPreviewCart(true);
  };
  const closeCartPreviewHandler = () => {
    setPreviewCart(false);
  };

  return (
    <section className={classes.product}>
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="Logo" />
        <img
          onClick={showCartHandler}
          className={classes.cart}
          src={cart}
          alt="cart-icon"
        />
        {previewCart && <div className={classes.cartTotal}>1</div>}
      </div>
      <div>
        <div className={classes.sectionImg}>
          {previewCart && (
            <CartPreview onClosePreview={closeCartPreviewHandler} />
          )}

          <div className={classes.text}>
            <h2>Samurai King Resting</h2>
          </div>
          <div className={classes.add}>
            <button className={classes.btn} href="/">
              ADD TO CART
            </button>
          </div>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={dog}
              alt="A dog resting on the floor"
            />
            <p className={classes.imgTag}>Photo of the day</p>
          </div>
        </div>
        <div className={classes.productDescription}>
          <div className={classes.descriptionLeft}>
            <h5>About the Samurai King Resting</h5>
            <h5 className={classes.category}>Pets</h5>
            <p>
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder
            </p>
            <p className={classes.p2}>
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </p>
          </div>
          <div className={classes.descriptionRight}>
            <h5>People also buy</h5>
            <div className={classes.imgRow}>
              <img src={yellow} alt="Yellow wall" />
              <img src={wallFlower} alt="Yellow wall" />
              <img src={Balloon} alt="Yellow wall" />
            </div>
            <h5>Details</h5>
            <p className={classes.details}>Size: 1020 x 1020 pixel</p>
            <p className={classes.details}>Size: 15mb</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
