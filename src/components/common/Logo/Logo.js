import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

import { content } from '../../../content';

const Component = ({ className }) => <a href={content.gitHub} target="_blank" rel="noopener noreferrer"><img src='logo.svg' alt='Website logo.' className={clsx(className, styles.root)} /></a>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Logo,
  Component as LogoComponent, //for tests
};

