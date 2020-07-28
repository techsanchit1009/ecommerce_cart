import React from 'react';
import classes from './Item.module.css';

const Item = (props) => {
  const { itemId, count, onItemIncrement, onItemDelete } = props;
  const counterClasses = [classes.Count];
  if(count && count > 0){
    counterClasses.push(classes.NonZero);
  }

  return (
    <div className={classes.Item}>
      <div className={counterClasses.join(' ')}>{count}</div>
      <div>
        <button className={classes.IncBtn} onClick={() => onItemIncrement(itemId)}>Increment</button>
      </div>
      <div>
        <button className={classes.DelBtn} onClick={() => onItemDelete(itemId) }>Delete</button>
      </div>
    </div>
  );
}

export default Item;