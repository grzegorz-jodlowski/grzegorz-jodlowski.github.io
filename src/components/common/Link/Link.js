import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Link.module.scss';

const Component = ({ className, source, icon, text, separator }) =>
  <a href={source} target="_blank" rel="noopener noreferrer" className={clsx(className, styles.root, separator && styles.separator)}>
    <i className={clsx(styles.icon, `fas fa-${icon}`)}></i>{text}
  </a>;

Component.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  separator: PropTypes.bool,
};

export {
  Component as Link,
  Component as LinkComponent, //for tests
};

