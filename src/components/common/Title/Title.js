import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';

const Component = ({ className, variant, text, underline, decoration }) => <h2 className={clsx(className, styles.root, styles[variant], decoration && styles.decoration, underline && styles.underline)}>{text}</h2>;

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
  decoration: PropTypes.bool,
  underline: PropTypes.bool,
};

export {
  Component as Title,
  Component as TitleComponent, //for tests
};

