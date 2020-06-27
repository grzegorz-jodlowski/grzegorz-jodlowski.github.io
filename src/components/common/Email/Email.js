import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Email.module.scss';

const Component = ({ className, email }) => <p className={clsx(className, styles.root)}>{email}</p>;

Component.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
};

export {
  Component as Email,
  Component as EmailComponent, //for tests
};

