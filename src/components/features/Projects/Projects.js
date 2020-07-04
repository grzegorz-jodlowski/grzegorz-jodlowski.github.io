import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Projects.module.scss';

import { Project } from '../Project/Project';

const Component = ({ className, projects }) =>
  <div className={clsx(className, styles.root)}>
    {projects.map(project => <Project key={project.id} {...project} />)}
  </div>;

Component.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array,
};

export {
  Component as Projects,
  Component as ProjectsComponent, //for tests
};

