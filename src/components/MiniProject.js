import React from 'react';
import PropTypes from 'prop-types';
import SkillGrid from './SkillGrid';
import SkillPoint from './SkillPoint';

const MiniProject = ({
  project: { title, skills, description, previewImg },
}) => {
  return (
    <article className="mini-project card text-center">
      <img className="card__img" src={previewImg} alt={`${title} project`} />

      <div className="card__content">
        <h4 className="card__heading">{title}</h4>

        <p className="mt-0">{description}</p>

        <div style={{ textAlign: 'center' }}>
          <SkillGrid skills={skills} />
          {skills.map((skill, index) => {
            return <SkillPoint key={index} skill={skill} />;
          })}
        </div>

        <button type="button" className="btn btn--outline mt-4">
          DEMO
        </button>
      </div>
    </article>
  );
};

MiniProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniProject;
