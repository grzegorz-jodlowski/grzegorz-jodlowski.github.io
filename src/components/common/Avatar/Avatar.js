import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Avatar.module.scss';

import { Bubble } from '../Bubble/Bubble';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Bubble text='Hi there!' icon='👋' className={styles.bubble} />
    <img src='avatar.jpg' alt="Owner's avatar" className={styles.image} />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Avatar,
  Component as AvatarComponent, //for tests
};

