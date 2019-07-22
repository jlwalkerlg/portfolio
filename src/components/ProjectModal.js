import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

import { ReactComponent as OpenIcon } from '../img/baseline-open_in_new-24px.svg';
import { ReactComponent as CodeIcon } from '../img/baseline-code-24px.svg';

const ProjectModal = ({ project, onClose }) => {
  const { title, description, gif, sourceCodeLink, liveDemoLink } = project;

  return (
    <Modal onClose={onClose} label={title}>
      <div className="project-modal">
        <div className="project-modal__img-wrap">
          <img src={gif} alt={`${title} gif`} />
        </div>

        <div className="project-modal__content">
          <p className="project-modal__heading">{title}</p>

          <p className="project-modal__description">{description}</p>
          <p className="project-modal__description">{description}</p>
          <p className="project-modal__description">{description}</p>
          <p className="project-modal__description">{description}</p>

          {(sourceCodeLink || liveDemoLink) && (
            <div className="project-modal__buttons">
              {liveDemoLink && (
                <a href={liveDemoLink} className="btn btn--primary">
                  <span className="btn__span">Live Demo</span>
                  <OpenIcon className="btn__icon" />
                </a>
              )}

              {sourceCodeLink && (
                <a href={sourceCodeLink} className="btn btn--outline">
                  <span className="btn__span">Source Code</span>
                  <CodeIcon className="btn__icon" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gif: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string,
    liveDemoLink: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
