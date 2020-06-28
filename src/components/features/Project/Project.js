import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Project.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.description}>
      <h2>Project</h2>
    </div>
    <div className={styles.links}>
      Demo
    </div>

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

