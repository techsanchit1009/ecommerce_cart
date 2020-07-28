import React from 'react';
import classes from './TopBar.module.css';
import Cart from '../../Assets/cart.svg';
import Container from '../UI/Container/Container';

const TopBar = (props) => {
  const { totalCount } = props;

  return (
    <div className={classes.TopBar}>
      <Container>
        <div className={classes.Heading}>Counter</div>
        <div className={classes.Cart}>
          <img src={Cart} alt="Cart" className={classes.CartImage}/>
          <div className={classes.CartValue}>{totalCount}</div>
        </div>
      </Container>
    </div>
  );
}


export default TopBar;