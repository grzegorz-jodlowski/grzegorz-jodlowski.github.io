import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProjectsSection.module.scss';

import { Title } from '../../common/Title/Title';
import { Projects } from '../Projects/Projects';

import { content } from '../../../content';
import { Spinner } from '../../common/Spinner/Spinner';


class Component extends React.Component {
  state = {
    loading: false,
    projects: [],
  }

  componentDidMount() {
    if (!this.state.projects.length) {
      // this.setState({ loading: true });
      // fetch('https://api.github.com/users/grzegorz-jodlowski/repos?sort=created?direction=asc')
      // .then(response => response.json())
      // .then(data => this.setState({ projects: [...data], loading: false }))
      // .catch(err => console.log(err));
    }
  }

  render() {
    const { className } = this.props;
    const { loading, projects } = this.state;
    console.log(' : Component -> render -> projects', projects);

    return (
      <section id='projects' className={clsx(className, styles.root)} >
        <div className={'container'}>
          <Title text='Recent projects' size='big' />
          <p className={styles.description}>{content.projectDescription}</p>
          {/* {loading ? <Spinner /> : <Projects projects={projects} />} */}
          {loading ? <Spinner /> : <Projects projects={[1, 2, 3, 4, 5, 6]} />}
        </div>
      </section>
    );
  }
}


Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as ProjectsSection,
  Component as ProjectsSectionComponent, //for tests
};

