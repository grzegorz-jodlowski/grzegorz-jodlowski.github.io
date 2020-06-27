import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Email.module.scss';

const Component = ({ className, email }) => <a href={`mailto:${email}`} className={clsx(className, styles.root)}>{email}</a>;

Component.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
};

export {
  Component as Email,
  Component as EmailComponent, //for tests
};

