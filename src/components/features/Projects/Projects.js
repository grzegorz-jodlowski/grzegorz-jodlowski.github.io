import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Projects.module.scss';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.root)}>
    <div className={'container'}>
      <h2>Projects</h2>
      {children}
    </div>
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Projects,
  Component as ProjectsComponent, //for tests
};

