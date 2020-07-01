import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Icon.module.scss';

const Component = ({ className, link, icon }) => (
  <a href={link} className={clsx(className, styles.root)}><i className={icon}></i></a>
);

Component.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
};

export {
  Component as Icon,
  Component as IconComponent, //for tests
};

