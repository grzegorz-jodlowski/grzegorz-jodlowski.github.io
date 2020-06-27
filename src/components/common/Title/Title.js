import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';

const Component = ({ className, size, text, variant, underline }) => <h2 className={clsx(className, styles.root, styles[size], styles[variant], underline && styles.underline)}>{text}</h2>;

Component.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  underline: PropTypes.bool,
};

export {
  Component as Title,
  Component as TitleComponent, //for tests
};

