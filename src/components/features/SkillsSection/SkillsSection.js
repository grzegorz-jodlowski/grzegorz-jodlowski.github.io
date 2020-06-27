import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SkillsSection.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>SkillsSection</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as SkillsSection,
  Component as SkillsSectionComponent, //for tests
};

