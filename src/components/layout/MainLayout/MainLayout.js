import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MainLayout.module.scss';

import { Footer } from '../Footer/Footer';


const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {children}
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent, //for tests
};

