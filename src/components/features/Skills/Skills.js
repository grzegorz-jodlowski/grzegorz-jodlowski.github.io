import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Skills.module.scss';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.root, 'container')}>
    <h2>Skills</h2>
    {children}
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Skills,
  Component as SkillsComponent, //for tests
};

