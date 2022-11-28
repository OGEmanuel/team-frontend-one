import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes.heading}>Samurai King Resting</h1>
      <div className={classes['background-image']}>
        <p className={classes['image-text']}>Photo of the day</p>
      </div>
    </section>
  );
};

export default Hero;
