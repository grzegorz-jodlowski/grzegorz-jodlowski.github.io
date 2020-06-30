import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Project.module.scss';

import { nameFromDashedTitle } from '../../../utils/nameFromDashedTitle';

const Component = ({ className, name, description }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>
      <i className={clsx(styles.githubLogo, 'fab fa-github')}></i>
      <h2 className={styles.title}>{nameFromDashedTitle(name)}</h2>
      <p className={styles.subtitle}>{description}</p>

    </div>
    <div className={styles.links}>
      Demo
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export {
  Component as Project,
  Component as ProjectComponent, //for tests
};

