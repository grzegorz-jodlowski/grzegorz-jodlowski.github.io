import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import { Title } from '../../common/Title/Title';
import { Email } from '../../common/Email/Email';
import { Socials } from '../../features/Socials/Socials';

import { content } from '../../../content';

const Component = ({ className }) => (
  <footer id='contact' className={clsx(className, styles.root)}>
    <div className={'container'}>
      <Title text='Contact me' size='medium' variant='contact' decoration />
      <p className={styles.description}>{content.contactDescription}</p>
      <Socials gitHub={content.gitHub} linkedIn={content.linkedIn} facebook={content.facebook} />
      <Email email={content.email} />
    </div>
  </footer>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent, //for tests
};

