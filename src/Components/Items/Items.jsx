import React from 'react';
import Container from '../UI/Container/Container';
import {connect} from 'react-redux';
import * as itemAction from '../../Store/Actions/item.action';
import Item from './Item/Item';

const Items = (props) => {
  const { items, onItemIncrement, onItemDelete } = props;

  return (
    <Container>
      {items.length ? items.map((item) => (
        <Item
          key={item.itemId}
          itemId={item.itemId}
          count={item.count}
          onItemIncrement={onItemIncrement}
          onItemDelete={onItemDelete}
        />
      )): <p>Cart is Empty!</p>}
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemIncrement: (itemId) => dispatch(itemAction.incrementItem(itemId)),
    onItemDelete: (itemId) => dispatch(itemAction.deleteItem(itemId))
  }
}

export default connect(null, mapDispatchToProps)(Items);