import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Project.module.scss';

import { nameFromDashedTitle } from '../../../utils/nameFromDashedTitle';

import { Title } from '../../common/Title/Title';

const Component = ({ className, name, description }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>
      <i className={clsx(styles.githubLogo, 'fab fa-github')}></i>
      <Title className={styles.title} text={nameFromDashedTitle(name)} size='small' />
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

