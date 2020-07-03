import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Bubble.module.scss';

const Component = ({ className, text, icon }) => <div className={clsx(className, styles.root)}>{text}<span className={styles.icon}>{icon}</span></div>;

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

export {
  Component as Bubble,
  Component as BubbleComponent, //for tests
};

