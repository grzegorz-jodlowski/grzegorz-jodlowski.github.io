import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { Hero } from '../../features/Hero/Hero';
import { SkillsSection } from '../../features/SkillsSection/SkillsSection';
import { ProjectsSection } from '../../features/ProjectsSection/ProjectsSection';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root)}>
    <Logo className={styles.logo} />
    <Hero />
    <SkillsSection />
    <ProjectsSection />
  </main>

);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent, //for tests
};

