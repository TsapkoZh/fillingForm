import React, { Component } from 'react';

import s from './form.module.scss';

class HeaderForm extends Component {
  state = {
    formErrors: {
      date: '', 
      number: '',
      toWhom: '',
      fromWhom: '',
    },
    dateValid: false, 
    numberValid: false,
    toWhomValid: false,
    fromWhomValid: false,
    formValid: false,
  }
  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]: val},
                  () => { this.validateField(nam, val) })
  }

  validateField(fieldName, value) {
    const { formErrors } = this.state;

    switch (fieldName) {
        case 'date': {
          const isValid = value.length >= 8;
  
          this.setState({ 
            formErrors: {
              ...formErrors,
              date: isValid ? '' : 'Введите дату*',
            },
            dateValid: isValid,
          });

          this.handleKeyPressDate()
          break;}

      case 'number': {
        const isValid = value >= 1;

        this.setState({ 
          formErrors: {
            ...formErrors,
            number: isValid ? '' : 'Введите номер (больше ноля)*',
          },
          numberValid: isValid,
        });

        this.handleKeyPressNumber()
        break;}
        
      case 'toWhom': {
        const isValid = value.length >= 2;

        this.setState({ 
          formErrors: {
            ...formErrors,
            toWhom: isValid ? '' : 'Не короче двух символов*',
          },
          toWhomValid: isValid,
        });

        this.handleKeyPressToWhom()
        break;}

      case 'fromWhom': {
        const isValid = value.length >= 2;

        this.setState({ 
          formErrors: {
            ...formErrors,
            fromWhom: isValid ? '' : 'Не короче двух символов*',
          },
          fromWhomValid: isValid,
        });

        this.handleKeyPressFromWhom()
        break;}

      default:
        break;
  }}

  handleKeyPressDate = () => {
    const { date } = this.state;

    this.props.addDate(date);
  }

  handleKeyPressNumber = () => {
    const { number } = this.state;

    this.props.addNumber(number);
  }

  handleKeyPressToWhom = () => {
    const { toWhom } = this.state;

    this.props.addToWhom(toWhom);
  }

  handleKeyPressFromWhom = () => {
    const { fromWhom } = this.state;

    this.props.addFromWhom(fromWhom);
  }

  maxLengthCheck = object => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }

  render() {
    const {
      formErrors,
      dateValid,
      numberValid,
      toWhomValid,
      fromWhomValid,
    } = this.state;

    return (
      <form className={s.formWrapper}>
        <label className={s.cap}>
          <input
            name='date'
            type='date'
            max="2050-12-31"
            onChange={this.handleChange}
					  className={dateValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
          />
          <p className={s.error}>{formErrors.date}</p>

          <input 
            name='number'
            type='number'
            maxLength = '5'
            onInput={this.maxLengthCheck}
            onChange={this.handleChange}
					  className={numberValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='номер накладной:'
          />
          <p className={s.error}>{formErrors.number}</p>

          <input 
            name='toWhom'
            type='text'
            maxLength = '50'
            onChange={this.handleChange}
					  className={toWhomValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='кому:'
          />
          <p className={s.error}>{formErrors.toWhom}</p>

          <input 
            name='fromWhom'
            type='text'
            maxLength = '50'
            onChange={this.handleChange}
					  className={fromWhomValid ? `${s.entryField} ${s.entryFieldTrue}` : `${s.entryField}`}
            placeholder='от кого:'
          />
          <p className={s.error}>{formErrors.fromWhom}</p>
        </label>
      </form>
    )
  }
}

export default HeaderForm;