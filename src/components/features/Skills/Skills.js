import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Skills.module.scss';

import { Title } from '../../common/Title/Title';
import { Skill } from '../Skill/Skill';

const Component = ({ className, title, variant, skills }) =>
  <article className={clsx(className, styles.root)}>
    <Title text={title} size='medium' variant={variant} decoration />
    <div className={styles.list}>
      {skills.map(skill => <Skill key={skill} variant={variant} text={skill} />)}
    </div>
  </article>;

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string,
  skills: PropTypes.array,
};

export {
  Component as Skills,
  Component as SkillsComponent, //for tests
};

