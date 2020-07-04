import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Project.module.scss';

import { Title } from '../../common/Title/Title';
import { Link } from '../../common/Link/Link';

import { nameFromDashedTitle } from '../../../utils/nameFromDashedTitle';

const Component = ({ className, name, description, homepage, html_url, id }) => {
  const starredProjects = [269592157, 266321545, 252203276, 216858353, 240736461, 254131413, 260241952, 236449516];

  return (
    <div className={clsx(className, styles.root)}>
      {starredProjects.includes(id) && <i className={clsx(styles.star, 'fas fa-star')}></i>}
      <div className={styles.header}>
        <i className={clsx(styles.githubLogo, 'fab fa-github')}></i>
        <Title className={styles.title} text={nameFromDashedTitle(name)} size='small' />
        <p className={styles.subtitle}>{description}</p>

      </div>
      <div className={styles.links}>
        {homepage && <Link icon='desktop' text='Demo' source={homepage} />}
        {html_url && <Link icon='code' text='Github' source={html_url} separator={homepage ? true : false} />}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  homepage: PropTypes.string,
  html_url: PropTypes.string,
  id: PropTypes.number,
};

export {
  Component as Project,
  Component as ProjectComponent, //for tests
};

