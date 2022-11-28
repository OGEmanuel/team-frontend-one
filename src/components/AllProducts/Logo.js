import classes from './Logo.module.css';

import cart from '../../assests/cart.png';
import logo from '../../assests/logo.png';

const Logo = () => {
  return (
    <div className={classes['logo-box']}>
      <img src={logo} alt="logo" />
      <img className={classes.cart} src={cart} alt="shopping cart" />
    </div>
  );
};

export default Logo;
