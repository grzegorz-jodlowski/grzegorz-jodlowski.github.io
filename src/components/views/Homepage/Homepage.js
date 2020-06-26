import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { Hero } from '../../features/Hero/Hero';
import { Skills } from '../../features/Skills/Skills';
import { Projects } from '../../features/Projects/Projects';
import { Courses } from '../../features/Courses/Courses';


const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root)}>
    <Logo className={styles.logo} />
    <Hero />
    <Skills />
    <Projects />
    <Courses />
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

