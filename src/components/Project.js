import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillGrid from './SkillGrid';
import ProjectModal from './ProjectModal';
import ScrollAnimation from './ScrollAnimation';

const Project = ({ project, reversed }) => {
  const { title, skills, description, previewImg } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article className={`project${reversed ? ' project--reversed' : ''}`}>
      <div className="project__preview">
        <ScrollAnimation animation={reversed ? 'fadeInRight' : 'fadeInLeft'}>
          <img src={previewImg} alt={`${title} project`} />
        </ScrollAnimation>
      </div>

      <div className="project__content">
        <ScrollAnimation animation="fadeInUp delay-500">
          <h3 className="project__heading">{title}</h3>

          <p className="mt-2 text-body">{description}</p>

          <SkillGrid skills={skills} />

          <button
            type="button"
            className="btn btn--outline mt-4"
            onClick={openModal}
          >
            MORE INFO
          </button>
        </ScrollAnimation>
      </div>

      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
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
