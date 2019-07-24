import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillPoint from './SkillPoint';
import ProjectModal from './ProjectModal';

const MiniProject = ({ project }) => {
  const { title, skills, description, previewImg, previewImgLg } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article className="mini-project card text-center">
      <img
        className="card__img"
        srcSet={`${previewImg} 384w, ${previewImgLg} 768w`}
        sizes="(min-width: 344px) 250px, 80vw"
        src={previewImg}
        alt={`${title} project`}
      />

      <div className="card__content">
        <h4 className="card__heading">{title}</h4>

        <p className="mt-0">{description}</p>

        <div>
          {skills.map(skill => {
            return <SkillPoint key={skill} skill={skill} />;
          })}
        </div>

        <button
          type="button"
          className="btn btn--outline mt-4"
          onClick={openModal}
        >
          MORE INFO
        </button>

        {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
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
    previewImgLg: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniProject;
