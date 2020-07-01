import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Component = ({ className, text, action }) =>
  <button
    className={clsx(className, styles.root)}
    onClick={action || null}
  >
    {text}
  </button>;

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
};

export {
  Component as Button,
  Component as ButtonComponent, //for tests
};

