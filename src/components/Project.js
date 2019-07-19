import React from 'react';
import PropTypes from 'prop-types';
import SkillGrid from './SkillGrid';

const Project = ({
  project: { title, skills, description, previewImg },
  reversed,
}) => {
  return (
    <article className={`project${reversed ? ' project--reversed' : ''}`}>
      <div className="project__preview">
        <img src={previewImg} alt={`${title} project`} />
      </div>

      <div className="project__content">
        <h3 className="project__heading">{title}</h3>

        <p className="mt-2 text-body">{description}</p>

        <SkillGrid skills={skills} />

        <button type="button" className="btn btn--outline mt-4">
          DEMO
        </button>
      </div>
    </article>
  );
};

Project.defaultProps = {
  reversed: false,
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
  }).isRequired,
  reversed: PropTypes.bool,
};

export default Project;
