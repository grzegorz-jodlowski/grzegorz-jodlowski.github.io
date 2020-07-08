import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProjectsSection.module.scss';

import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { Projects } from '../Projects/Projects';
import { Spinner } from '../../common/Spinner/Spinner';

import { content } from '../../../content';

const Component = ({ className }) => {

  const [loading, setLoading] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    if (!loadedProjects.length) {
      setLoading(true);

      fetch('https://api.github.com/users/grzegorz-jodlowski/repos?sort=created?direction=asc')
        .then(response => response.json())
        .then(data => {
          setLoadedProjects([...data]);
          setDisplayedProjects(data.slice(0, 8));
          setLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [loadedProjects.length]);

  const handleShowMore = () => {
    setDisplayedProjects([...displayedProjects, ...loadedProjects.slice(displayedProjects.length, displayedProjects.length + 8)]);
  };

  return (
    <section id='projects' className={clsx(className, styles.root)} >
      <div className={'container'}>
        <div className={styles.projectsNumber}><span>{`${displayedProjects.length}/${loadedProjects.length}`}</span></div>
        <Title text='Recent projects' size='big' />
        <p className={styles.description}>{content.projectDescription}</p>
        {loading ? <Spinner /> : <Projects projects={displayedProjects} />}
        {(displayedProjects.length !== loadedProjects.length) && <Button text='Show more' action={handleShowMore} />}
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as ProjectsSection,
  Component as ProjectsSectionComponent, //for tests
};

