import * as actionTypes from '../Actions/actionTypes';

const initialState = {
 items: [
   {itemId: 1, count: 0},
   {itemId: 2, count: 0},
   {itemId: 3, count: 0},
   {itemId: 4, count: 0}
 ],
 totalCount: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT_ITEM:
      const incrementedItem = state.items.find(item => item.itemId === action.itemId);
      incrementedItem.count += 1;
      return {
        ...state,
        items: [
          ...state.items
        ],
        totalCount: state.totalCount + 1
      }

    case actionTypes.DELETE_ITEM:
      const itemToDelete = state.items.find(item => item.itemId === action.itemId);
      const updatedList = state.items.filter(item => item.itemId !== itemToDelete.itemId);
      return {
        ...state,
        items: updatedList,
        totalCount: state.totalCount - itemToDelete.count
      }
    default:
      return state;
  }  
}

export default reducer;