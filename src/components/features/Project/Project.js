import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Project.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Project</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Project,
  Component as ProjectComponent, //for tests
};

