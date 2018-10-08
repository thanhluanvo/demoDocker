import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductList.css';
import ProductCard from './product-card/ProductCard';
import { LOADING_PRODUCT } from '../../../../actions/product.action'

class ProductList extends Component {
    render() {
        const { loading, fulfilled, failed, products } = this.props.product;
        return (
            <div className="ProductList">
             {
                 fulfilled && products && products.map( (item, index) => {
                     return <ProductCard key={index} product={item}/>
                 })
             }
            </div>
        );
    }

    componentDidMount() {
        this.props.loadProduct();
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadProduct: () => dispatch({ type: LOADING_PRODUCT })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);