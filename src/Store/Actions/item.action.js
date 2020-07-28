import * as actionTypes from './actionTypes';

export const incrementItem = (itemId) => {
  return {
    type: actionTypes.INCREMENT_ITEM,
    itemId: itemId
  };
}

export const deleteItem = (itemId) => {
  return {
    type: actionTypes.DELETE_ITEM,
    itemId: itemId
  };
}