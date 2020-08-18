import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Goods from './Goods.js'

import s from './listOfGoods.module.scss'

class ListOfGoods extends Component {

  sum = arr => { 
    return arr.reduce((partial_sum, a) => partial_sum + a, 0) 
  }

  render() {
    const { products } = this.props;
    const quantity = products.map(p => Number(p.quantity))
    const price = products.map(p => Number(p.price))

    return(
      <div className={s.tableWraper}>
        <table className={s.table}>
          <colgroup>
            <col className={s.col1} />
            <col className={s.col2} />
            <col className={s.col3} span='3' />
          </colgroup>

          <tbody>
            <tr>
              <td className={s.tableCell}>
                №<br />
                п/п
              </td>

              <td className={s.tableCell}>
                Наименование товара
              </td>

              <td className={s.tableCell}>
                Кол-во
              </td>

              <td className={s.tableCell}>
                Цена<br />
                руб.,коп.
              </td>

              <td className={`${s.tableCell} ${s.rightBorder}`}>
                Сумма<br />
                руб.,коп.
              </td>
            </tr>

            {products.map(({id, nameProduct, quantity, price}, index) => (
              <Goods 
                key={id}
                index={index}
                nameProduct={nameProduct}
                quantity={quantity}
                price={price}
              />
              ))
            }
            <tr>
              <td className={`${s.tableCell} ${s.rightBorder} ${s.tableCellTotal}`}></td>

              <td className={`${s.tableCell} ${s.tableCellTotal}`}>
                Итого . . .
              </td>

              <td className={s.tableCell}>
                {this.sum(quantity)}
              </td>

              <td className={s.tableCell}>
                {this.sum(price)}
              </td>

              <td className={`${s.tableCell} ${s.rightBorder}`}>
                {this.sum(price) * this.sum(quantity)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ListOfGoods.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    nameProduct: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
  })),
}

export default ListOfGoods;