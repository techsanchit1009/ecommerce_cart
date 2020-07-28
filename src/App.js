import React from 'react';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Items from './Components/Items/Items';
import { connect } from 'react-redux';

const App = (props) => {
  const { items, totalCount } = props;
  
  return (
    <div className="App">
      <TopBar totalCount={totalCount} />
      <Items items={items} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    totalCount: state.totalCount
  }
}

export default connect(mapStateToProps)(App);
