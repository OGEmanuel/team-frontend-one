import Button from '../UI/Button';
import dog from '../../assests/dog.png';
import first from '../../assests/Rectangle-10.png';
import second from '../../assests/Rectangle-10.1.png';
import third from '../../assests/Rectangle-10.2.png';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes.heading}>Samurai King Resting</h1>
      <div className={classes.img}>
        <img src={dog} alt="Samurai King" />
      </div>
      <p className={classes['image-text']}>Photo of the day</p>
      <Button className={classes.button}>ADD TO CART</Button>
      <h2 className={classes['sub-heading']}>About the Samurai King Resting</h2>
      <p className={classes.text}>
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's
        De Finibus in order to provide placeholder text to mockup various fonts
        for a type specimen book.
      </p>
      <h2 className={classes['sub-heading']}>People also buy</h2>
      <div className={classes.suggestion}>
        <img src={first} alt="First item" />
        <img src={second} alt="Second item" />
        <img src={third} alt="Third item" />
      </div>
      <h2 className={classes['sub-heading']}>Details</h2>
      <p className={classes.text}>Size: 1020 x 1020 pixel</p>
      <p className={classes.text}>Size: 15 mb</p>
    </section>
  );
};

export default Hero;
