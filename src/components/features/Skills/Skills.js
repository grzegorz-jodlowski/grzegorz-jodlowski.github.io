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
    <section id='skills' className={clsx(className, styles.root)}>
      <div className={'container'}>
        <Title text='My Skills' size='big' underline />
        <SkillsSection skills={workingKnowledge} title='Working knowledge' variant='green' />
        <SkillsSection skills={knowSomething} title='Know something about' variant='violet' />
        <SkillsSection skills={wantToLearn} title='Want to learn' variant='blue' />
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

