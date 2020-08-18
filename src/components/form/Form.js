import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderForm from './HeaderForm.js';
import GoodsForm from './GoodsForm.js';

import s from './form.module.scss'

class Form extends Component {
  render() {
  const { 
    addDate, 
    addNumber,
    addToWhom,
    addFromWhom,
    addProduct, 
    allProducts, 
  } = this.props;

    return (
      <div className={s.formWrapper}>
          <HeaderForm 
            addDate={addDate}
            addNumber={addNumber}
            addToWhom={addToWhom}
            addFromWhom={addFromWhom}
          />
          <GoodsForm 
            addProduct={addProduct}
            allProducts={allProducts}
          />
      </div>
    ) 
  }
}

Form.propTypes = {
  addDate: PropTypes.func,
  addNumber: PropTypes.func,
  addToWhom: PropTypes.func,
  addFromWhom: PropTypes.func,
  addProduct: PropTypes.func,
  allProducts: PropTypes.number.isRequired,
}

export default Form;