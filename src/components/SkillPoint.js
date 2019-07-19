import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CheckBox } from '../img/baseline-check_box-24px.svg';

const SkillPoint = ({ skill }) => {
  return (
    <div>
      <CheckBox className="skill-point__check-box" />
      <div className="skill-point__skill">{skill}</div>
    </div>
  );
};

SkillPoint.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillPoint;
