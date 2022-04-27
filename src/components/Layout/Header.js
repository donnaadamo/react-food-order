import { Fragment } from 'react';
import meals from '../../assets/meals.jpeg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={meals} alt='Table of food'/>
      </div>
  </Fragment>
};

export default Header;
