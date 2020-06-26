import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Hero.module.scss';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.root, 'container')}>
    <h2>Hero</h2>
    {children}
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Hero,
  Component as HeroComponent, //for tests
};

