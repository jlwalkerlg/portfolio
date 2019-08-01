import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

import { ReactComponent as OpenIcon } from '../img/baseline-open_in_new-24px.svg';
import { ReactComponent as CodeIcon } from '../img/baseline-code-24px.svg';

const ProjectModal = ({ project, onClose }) => {
  const { title, about, gif, sourceCodeLink, liveDemoLink } = project;

  return (
    <Modal onClose={onClose} label={title}>
      <div className="project-modal">
        <div className="project-modal__img-wrap">
          <img src={gif} alt={`${title} gif`} />
        </div>

        <div className="project-modal__content">
          <p className="project-modal__heading">{title}</p>

          <div className="project-modal__about">{about}</div>

          {(sourceCodeLink || liveDemoLink) && (
            <div className="project-modal__buttons">
              {liveDemoLink && (
                <a
                  href={liveDemoLink}
                  className="btn btn--primary"
                  target="__blank"
                >
                  <span className="btn__span">Live Demo</span>
                  <OpenIcon className="btn__icon" />
                </a>
              )}

              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  className="btn btn--outline"
                  target="__blank"
                >
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
    about: PropTypes.element.isRequired,
    gif: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string,
    liveDemoLink: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
