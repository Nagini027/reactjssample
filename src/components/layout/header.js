
import { Fragment } from 'react';
import classes from './header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './headercartbutton';
const header = (props) => {
  return (
      <Fragment>
           <header className={classes.header}>
              <h1>ReactMeals</h1>
              
              <HeaderCartButton onClick={props.onShowCart} />
          </header>
           <div className={classes['main-image']}>
               <img src={mealsImage} alt='A table full of delicious food!' />
            
            </div>
    </Fragment>
  );
};

export default header;
