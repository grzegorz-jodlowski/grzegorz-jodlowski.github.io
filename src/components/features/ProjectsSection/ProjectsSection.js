import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProjectsSection.module.scss';

import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { Projects } from '../Projects/Projects';
import { Spinner } from '../../common/Spinner/Spinner';

import { content } from '../../../content';

class Component extends React.Component {
  state = {
    loading: false,
    loadedProjects: [],
    displayedProjects: [],
  }

  componentDidMount = () => {
    if (!this.state.loadedProjects.length) {
      this.setState({ loading: true });

      fetch('https://api.github.com/users/grzegorz-jodlowski/repos?sort=created?direction=asc')
        .then(response => response.json())
        .then(data => this.setState({ loadedProjects: [...data], displayedProjects: data.slice(0, 8), loading: false }))
        .catch(err => console.log(err));
    }
  }

  handleShowMore = () => {
    const { loadedProjects, displayedProjects } = this.state;

    this.setState({ displayedProjects: [...displayedProjects, ...loadedProjects.slice(displayedProjects.length, displayedProjects.length + 8)] });
  }

  render() {
    const { className } = this.props;
    const { loading, displayedProjects, loadedProjects } = this.state;

    return (
      <section id='projects' className={clsx(className, styles.root)} >
        <div className={'container'}>
          <Title text='Recent projects' size='big' />
          <p className={styles.description}>{content.projectDescription}</p>
          {loading ? <Spinner /> : <Projects projects={displayedProjects} />}
          {(displayedProjects.length !== loadedProjects.length) && <Button text='Show more' action={this.handleShowMore} />}
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

