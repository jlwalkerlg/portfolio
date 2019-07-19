import React from 'react';
import PropTypes from 'prop-types';
import SkillPoint from './SkillPoint';

const SkillPoints = ({ skills }) => {
  return (
    <ul className="skill-grid list-unstyled">
      {skills.map((skill, index) => {
        return (
          <li className="skill-grid__item">
            <SkillPoint key={index} skill={skill} />
          </li>
        );
      })}
    </ul>
  );
};

SkillPoints.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SkillPoints;
