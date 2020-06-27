import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProjectsSection.module.scss';

import { Title } from '../../common/Title/Title';

import { content } from '../../../content';


const Component = ({ className }) => (
  <section id='projects' className={clsx(className, styles.root)}>
    <div className={'container'}>
      <Title text='Recent projects' size='big' />
      <p className={styles.description}>{content.projectDescription}</p>
    </div>
  </section>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as ProjectsSection,
  Component as ProjectsSectionComponent, //for tests
};

