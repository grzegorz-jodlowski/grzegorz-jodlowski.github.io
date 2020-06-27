import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Skill.module.scss';

const Component = ({ className, variant, text }) => (
  <div className={clsx(className, styles.root)}>
    {text}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
};

export {
  Component as Skill,
  Component as SkillComponent, //for tests
};

