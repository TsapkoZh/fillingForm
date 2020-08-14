import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <td className='tableCell NumberInOrder'>
          {index + 1}
        </td>

        <td className='tableCell nameProduct'>{nameProduct}</td>

        <td className='tableCell quantity'>{quantity}</td>
        
        <td className='tableCell price'>{price}</td>

        <td className='tableCell right'>{quantity * price}</td>
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