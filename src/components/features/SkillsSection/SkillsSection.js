import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SkillsSection.module.scss';

import { content } from '../../../content';

import { Title } from '../../common/Title/Title';
import { Skills } from '../Skills/Skills';


const Component = ({ className }) => {
  const { workingKnowledge, knowSomething, wantToLearn } = content.skills;

  return (
    <section id='skills' className={clsx(className, styles.root)}>
      <div className={'container'}>
        <Title text='My Skills' size='big' underline />
        <Skills skills={workingKnowledge} title='Working knowledge' variant='green' />
        <Skills skills={knowSomething} title='Know something about' variant='violet' />
        <Skills skills={wantToLearn} title='Want to learn' variant='blue' />
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as SkillsSection,
  Component as SkillsSectionComponent, //for tests
};

