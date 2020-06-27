import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProjectsSection.module.scss';

import { Title } from '../../common/Title/Title';
import { Projects } from '../Projects/Projects';

import { content } from '../../../content';


class Component extends React.Component {
  state = {
    loading: false,
    projects: [],
  }

  componentDidMount() {
    if (this.state.projects.length) {
      // fetch()
      //   .then
    }
  }

  render() {
    const { className, projects } = this.props;

    return (
      <section id='projects' className={clsx(className, styles.root)} >
        <div className={'container'}>
          <Title text='Recent projects' size='big' />
          <p className={styles.description}>{content.projectDescription}</p>
          <Projects projects={projects} />
        </div>
      </section>
    );
  }
}


Component.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array,
};

export {
  Component as ProjectsSection,
  Component as ProjectsSectionComponent, //for tests
};

