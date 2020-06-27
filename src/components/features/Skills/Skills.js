import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Skills.module.scss';
import { Title } from '../../common/Title/Title';

const Component = ({ className }) => (
  <section className={clsx(className, styles.root)}>
    <div className={'container'}>
      <Title text='My Skills' variant='big' underline />
    </div>
  </section>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Skills,
  Component as SkillsComponent, //for tests
};

