import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({ className, children }) => (
  <footer id='contact' className={clsx(className, styles.root)}>
    <div className={'container'}>
      <h2>Footer</h2>
    </div>
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent, //for tests
};

