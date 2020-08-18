import React, { Component } from 'react';

import s from './footer.module.scss';

class Footer extends Component {
  render() {
    return(
      <div className={s.footer}>
        М.П.
        <div className={s.signature}>
          Сдал <span className={s.line}>(расшифровка подписи)</span>
        </div>

        <div className={s.signature}>
          Принял <span className={s.line}>(расшифровка подписи)</span>
        </div>
      </div>
    )
  }
}

export default Footer;
