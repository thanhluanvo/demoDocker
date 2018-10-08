import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import MainApp from './main/MainApp';
import ProductDetailPopup from './product-detail-popup/ProductDetailPopup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainApp/>
        <ProductDetailPopup/>
      </div>
    );
  }
}

export default App;
