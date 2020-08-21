import React, { Component } from 'react';

import s from './form.module.scss';

class GoodsForm extends Component {
  state = {
    formErrors: {
      nameProduct: '', 
      quantity: '',
      price: '',
    },
    nameProductValid: false, 
    quantityValid: false,
    priceValid: false,
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val},
                  () => { this.validateField(nam, val) })
  }

  validateField = (fieldName, value)  => {
    let fieldValidationErrors = this.state.formErrors;
    let nameProductValid = this.state.nameProductValid;
    let quantityValid = this.state.quantityValid;
    let priceValid = this.state.priceValid;

    switch (fieldName) {
      case 'nameProduct':
        if (value || !value) {
          nameProductValid = value.length >= 1;
          fieldValidationErrors.nameProduct = nameProductValid ? '' : 'Введите наименование товара*';
        }
        break;

      case 'quantity':
        if (value.length > 5) {
          quantityValid = false;
        } else if (value || !value) {
          quantityValid = value > 0;
          fieldValidationErrors.quantity = quantityValid ? '' : 'Введите количество*';
        }
        break;

      case 'price':
        const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

        if (f(value) > 2) {
          priceValid = false;
          fieldValidationErrors.price = 'Не больше двух знаков после запятой*';
        } else if (value || !value) {
          priceValid = value > 0;
          fieldValidationErrors.price = priceValid ? '' : 'Введите цену*';
        }
        break;

      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      nameProductValid: nameProductValid,
      quantityValid: quantityValid,
      priceValid: priceValid,
    }, this.validateForm);
  }

  validateForm() {
    const {
      nameProductValid,
      quantityValid,
      priceValid,
    } = this.state;

    this.setState({formValid: 
                    nameProductValid && 
                    quantityValid &&
                    priceValid
                  });
  }

  handleSubmit = event => {
    const {
      nameProduct,
      quantity,
      price,
    } = this.state;

    const newProduct = {
      id: Date.now().toString(), 
      nameProduct,
      quantity,
      price,
    };

    event.preventDefault();
    this.props.addProduct(newProduct);
		event.currentTarget.value = '';
  }

  maxLengthCheck = object => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
  }

  render() {
    const {
      formErrors,
      formValid,
      nameProductValid,
      quantityValid,
      priceValid,
    } = this.state;

    const { allProducts } = this.props;

    return (
        <form 
          onSubmit={this.handleSubmit}
          className={s.formWrapper}
        >
        <label className={`${s.cap} ${s.capBorder}`}>
          <input
            name='nameProduct'
            type='text'
            maxLength='20'
            onChange={this.handleChange}
            className={nameProductValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='наименование товара:'
          />
          <p className={s.error}>{formErrors.nameProduct}</p>

          <input
            name='quantity'
            type='number'
            maxLength = '4'
            onInput={this.maxLengthCheck}
            onChange={this.handleChange}
            className={quantityValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='количество:'
          />
          <p className={s.error}>{formErrors.quantity}</p>

          <input 
            name='price'
            type='number'
            maxLength = '6'
            onInput={this.maxLengthCheck}
            onChange={this.handleChange}
            step='0.01' 
            min='0' 
            className={priceValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='цена: 0,00р.'
          />
          <p className={s.error}>{formErrors.price}</p>
        </label>

        <button 
          onClick={this.handleSubmit}
          disabled={!formValid || allProducts > 19}
          className={!formValid || allProducts > 19 ?  `${s.btnWriteDown} ${s.btnWriteDownDisable}` : `${s.btnWriteDown} ${s.btnWriteDownActive}`}
        >
          добавить товар
        </button>
        <p className={allProducts > 19 ? `${s.error} ${s.errorBtn}` : `${s.hideBtnError}`}>
          Не больше двадцати наименований*
        </p>
      </form>
    )
  }
}

export default GoodsForm;