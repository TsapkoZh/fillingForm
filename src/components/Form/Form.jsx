import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderForm from './HeaderForm';
import GoodsForm from './GoodsForm';

import s from './form.module.scss';

class Form extends Component {
  render() {
  const { 
    addDate, 
    addNumber,
    addToWhom,
    addFromWhom,
    addProduct, 
    quantityProducts, 
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
          quantityProducts={quantityProducts}
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
  quantityProducts: PropTypes.number.isRequired,
}

export default Form;