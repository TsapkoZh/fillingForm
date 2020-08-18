import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header.js';
import ListOfGoods from './ListOfGoods/ListOfGoods.js'
import Footer from './Footer/Footer.js'

import s from './document.module.scss'

class Document extends Component {
  render() {
    const {
      documentHeader,
      products,
      clearDoc,
    } = this.props;

    return (
      <div className={s.wrapperDocument}>
        <div className={s.document}>
          <Header 
            documentHeader={documentHeader}
          />
          <ListOfGoods
            products={products}
          />
          <Footer />
        </div>
        
        <button 
          onClick={clearDoc}
          className={s.btnClear}
        >
          очистить
        </button>
      </div>
    ) 
  }
}

Document.propTypes = {
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

export default Document;