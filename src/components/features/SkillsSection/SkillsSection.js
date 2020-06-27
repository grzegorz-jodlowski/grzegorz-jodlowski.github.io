import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SkillsSection.module.scss';

import { Title } from '../../common/Title/Title';

const Component = ({ className, title, variant }) => (
  <article className={clsx(className, styles.root)}>
    <Title text={title} size='medium' variant={variant} decoration />
    <div>

    </div>
  </article>
);

Component.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string,
  skills: PropTypes.array,
};

export {
  Component as SkillsSection,
  Component as SkillsSectionComponent, //for tests
};

