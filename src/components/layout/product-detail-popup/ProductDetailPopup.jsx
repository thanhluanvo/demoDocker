import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './ProductDetailPopup.css';

class ProductDetailPopup extends Component {
    render() {
        const { toggleProductDetail, product } = this.props.pdDetail;
        console.log("product");
        console.log(this.props.pdDetail);
        return (
            <Modal
                show={toggleProductDetail}
                backdrop="true"
                className="ProductDetailPopup"
                >
                <Modal.Header>
                    <div className="ModalHeader">
                        <span className="Title">chi tiết sản phẩm</span>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div><span>Body</span></div>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        pdDetail: state.productDetail
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPopup);