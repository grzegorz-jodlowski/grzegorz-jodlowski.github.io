import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Avatar.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
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

