import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Skills.module.scss';

import { content } from '../../../content';

import { Title } from '../../common/Title/Title';
import { SkillsSection } from '../SkillsSection/SkillsSection';


const Component = ({ className }) => {
  const { workingKnowledge, knowSomething, wantToLearn } = content.skills;

  return (
    <section className={clsx(className, styles.root)}>
      <div className={'container'}>
        <Title text='My Skills' variant='big' underline />
        <SkillsSection skills={workingKnowledge} variant='green' />
        <SkillsSection skills={knowSomething} variant='violet' />
        <SkillsSection skills={wantToLearn} variant='blue' />
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Skills,
  Component as SkillsComponent, //for tests
};

