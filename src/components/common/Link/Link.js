import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Link.module.scss';

const Component = ({ className, source, icon, text }) => <a href={source} className={clsx(className, styles.root)}><i className={`fas fa-${icon}`}></i>{text}</a>;

Component.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export {
  Component as Link,
  Component as LinkComponent, //for tests
};

