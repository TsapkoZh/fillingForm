import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './header.module.scss';

class Header extends Component {
  render() {
    const {
      documentHeader,
    } = this.props;

    return (
      <div className={s.header}>
        <div className={s.date}>
          «<span className={s.dateDay}>
            {documentHeader.date ? documentHeader.date.split('-')[2] : ''}
          </span>»
          <span className={s.dateMonth}>
            {documentHeader.date ? documentHeader.date.split('-')[1] : ''}
          </span>
          <span className={s.dateYear}>
            {documentHeader.date ? documentHeader.date.split('-')[0] : ''}
          </span>г.
        </div>

        <h1 className={s.title}>
          Накладная №
            <span className={s.invoiceNumber}>
              {documentHeader.number}
            </span>
        </h1>

        <p className={s.toWhom}>
          Кому
            <span className={s.toWhomField}>
              {documentHeader.toWhom}
            </span>
          </p>
        <p className={s.fromWhom}>
          От кого
            <span className={s.fromWhomField}>
              {documentHeader.fromWhom}
            </span></p>
      </div>
    )
  }
}

Header.propTypes = {
  documentHeader: PropTypes.shape({
    date: PropTypes.string,
    number: PropTypes.string,
    toWhom: PropTypes.string,
    fromWhom: PropTypes.string,
  }),
}

export default Header;
