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

  validErrorText = value => {
    const { formErrors } = this.state;

    let errorText = '';

    if (value <= 0) {
      errorText = 'Введите цену*'
    }
    if (this.countDecimals(value) > 2) {
      errorText = 'Не больше двух знаков после запятой*'
    }

    this.setState({             
      formErrors: {
        ...formErrors,
        price: errorText,
       },
    })
  }

  countDecimals = value => {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1] || 0;
  }

  validateField = (fieldName, value)  => {
    const { formErrors } = this.state;

    switch (fieldName) {
      case 'nameProduct': {
        const isValid = value.length >= 1;

        this.setState({ 
          formErrors: {
            ...formErrors,
            nameProduct: isValid ? '' : 'Введите наименование товара*',
          },
          nameProductValid: isValid,
        });
        break;}

      case 'quantity': {
        const isValid = value > 0;

        this.setState({ 
          formErrors: {
            ...formErrors,
            quantity: isValid ? '' : 'Введите количество*',
          },
          quantityValid: isValid,
        });
        break;}

        case 'price': {
          const isValid = value > 0 && this.countDecimals(value) < 2;

          this.validErrorText(value)
          
          this.setState({ 
            priceValid: isValid,
          });
          break;}

      default:
        break;
    }
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
      nameProductValid,
      quantityValid,
      priceValid,
    } = this.state;

    const { quantityProducts } = this.props;

    const formValid = nameProductValid && quantityValid && priceValid;

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
          disabled={!formValid || quantityProducts > 19}
          className={!formValid || quantityProducts > 19 ?  `${s.btnWriteDown} ${s.btnWriteDownDisable}` : `${s.btnWriteDown} ${s.btnWriteDownActive}`}
        >
          добавить товар
        </button>
        <p className={quantityProducts > 19 ? `${s.error} ${s.errorBtn}` : `${s.hideBtnError}`}>
          Не больше двадцати наименований*
        </p>
      </form>
    )
  }
}

export default GoodsForm;