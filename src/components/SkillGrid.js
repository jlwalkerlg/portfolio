import React from 'react';
import PropTypes from 'prop-types';
import SkillPoint from './SkillPoint';

const SkillGrid = ({ skills }) => {
  return (
    <ul className="skill-grid list-unstyled">
      {skills.map(skill => {
        return (
          <li key={skill} className="skill-grid__item">
            <SkillPoint skill={skill} />
          </li>
        );
      })}
    </ul>
  );
};

SkillGrid.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SkillGrid;
