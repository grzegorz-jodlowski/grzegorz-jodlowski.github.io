import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';

const Component = ({ className, variant, text }) => <h2 className={clsx(className, styles.root, styles[variant])}>{text}</h2>;

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
};

export {
  Component as Title,
  Component as TitleComponent, //for tests
};

