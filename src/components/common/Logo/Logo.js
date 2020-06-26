import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

const Component = ({ className }) => <img src='logo.svg' alt='Website logo.' className={clsx(className, styles.root)} />;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Logo,
  Component as LogoComponent, //for tests
};

