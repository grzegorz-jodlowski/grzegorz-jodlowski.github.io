import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Hero.module.scss';
import { content } from '../../../content';

import { Avatar } from '../../common/Avatar/Avatar';
import { Title } from '../../common/Title/Title';
import { Email } from '../../common/Email/Email';


const Component = ({ className }) => (
  <section className={clsx(className)}>
    <div className={'container'}>
      <div className={clsx(styles.root)}>
        <Avatar />
        <Title text={content.heroTitle} variant='big' />
        <p className={styles.description}>
          You might be interested in checking the list of <a href='#skills' className={styles.link}>my skills</a>. Don’t forget to have a glimpse at <a href='#projects' className={styles.link}>my projects</a>. Currently I’m looking for a new challenges so if you have one - <a href='#contact' className={styles.link}>contact me</a> <span role='img' aria-label='smile-emoji'>😊</span>
        </p>
        <Email email={content.email} />
      </div>
    </div>
  </section>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Hero,
  Component as HeroComponent, //for tests
};

