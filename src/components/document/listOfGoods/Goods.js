import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './listOfGoods.module.scss'

class Goods extends Component {
  render() {
    const {  
      nameProduct,
      quantity,
      price,
      index,
    } = this.props;

    return(
      <tr>
        <td className={`${s.tableCell} ${s.NumberInOrder}`}>
          {index + 1}
        </td>

        <td className={`${s.tableCell} ${s.nameProduct}`}>{nameProduct}</td>

        <td className= {`${s.tableCell} ${s.quantity}`}>{quantity}</td>
        
        <td className={`${s.tableCell} ${s.price}`}>{price}</td>

        <td className={`${s.tableCell} ${s.rightBorder}`}>{quantity * price}</td>
      </tr>
    )
  }
}

Goods.propTypes = {
  nameProduct: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
}

export default Goods;