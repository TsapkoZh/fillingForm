import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Form from './Form/Form.js';
import Document from './Document/Document.js';

import { 
  addDate, 
  addNumber, 
  addToWhom, 
  addFromWhom,
} from '../redux/documentHeader/actions.js';
import { addProduct, clearDoc } from '../redux/product/actions.js';

import s from './fillingForm.module.scss';

class FillingForm extends Component {
  render() {
    const { 
      addDate, 
      addProduct, 
      addNumber,
      addToWhom,
      addFromWhom,
      documentHeader, 
      products, 
      allProducts,
      clearDoc, 
    } = this.props;

    return (
      <div className={s.fillingForm}> 
        <Form 
          addDate={addDate}
          addNumber={addNumber}
          addToWhom={addToWhom}
          addFromWhom={addFromWhom}
          addProduct={addProduct}
          allProducts={allProducts}
          documentHeader={documentHeader}
        />
        <Document 
          documentHeader={documentHeader}
          products={products}
          clearDoc={clearDoc}
        />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  documentHeader: state.documentHeader,
  products: state.products,
  allProducts: state.products.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addDate,
    addNumber,
    addToWhom,
    addFromWhom,
    addProduct,
    clearDoc,
  }, dispatch);
  
  FillingForm.propTypes = {
    addDate: PropTypes.func,
    addProduct: PropTypes.func,
	  allProducts: PropTypes.number.isRequired,
    documentHeader: PropTypes.shape({
      date: PropTypes.string,
      number: PropTypes.string,
      toWhom: PropTypes.string,
      fromWhom: PropTypes.string,
    }),
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      nameProduct: PropTypes.string,
      quantity: PropTypes.string,
      price: PropTypes.string,
    })),
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(FillingForm);
