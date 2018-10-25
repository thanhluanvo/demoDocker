import React, { Component } from 'react';
import './Home.css';
import ProductList from './product-list/ProductList';

class Home extends Component {
    render() {
        return(
            <div className="HomePage_Luan">
                <ProductList/>
            </div>
        );
    }
}

export default Home;