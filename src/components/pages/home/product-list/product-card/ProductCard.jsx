import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductCard.css';
import imgUrl from '../../../../../assets/images/image1.jpg';
import { TOGGLE_PRODUCT_DETAIL } from '../../../../../actions/product.action';

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="ProductCard" onClick = {this.props.showProductDetail.bind(this, product)}>
                <div className="ProductCardContainer">
                    <div className="ProductImg">
                        <img src={imgUrl}/>
                    </div>
                    <div className="ProductTitle"><span>{product.title}</span></div>
                    <div className="ProductDesc"><span>{product.description}</span></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showProductDetail: (product) => dispatch({ type: TOGGLE_PRODUCT_DETAIL, toggleProductDetail: true, product })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);