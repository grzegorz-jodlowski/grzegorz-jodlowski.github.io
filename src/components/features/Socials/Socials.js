import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Socials.module.scss';

import { Icon } from '../../common/Icon/Icon';


const Component = ({ className, gitHub, linkedIn, facebook }) => (
  <div className={clsx(className, styles.root)}>
    <Icon link={gitHub} icon='fab fa-github' />
    <Icon link={linkedIn} icon='fab fa-linkedin' />
    <Icon link={facebook} icon='fab fa-facebook-square' />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  facebook: PropTypes.string,
};

export {
  Component as Socials,
  Component as SocialsComponent, //for tests
};

