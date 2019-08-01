import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import MiniProject from './MiniProject';
import ScrollAnimation from './ScrollAnimation';

const Projects = ({ projects, miniProjects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollAnimation animation="fadeInUp">
          <h2 className="my-0 text-center">Projects.</h2>
        </ScrollAnimation>

        <section>
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;
            return (
              <Project
                key={project.title}
                project={project}
                reversed={reversed}
              />
            );
          })}
        </section>

        <section className="mt-5">
          <ScrollAnimation animation="fadeInUp">
            <h3 className="text-center my-0">Mini Projects.</h3>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn delay-500">
            <section className="mini-projects mt-4">
              {miniProjects.map(project => {
                return <MiniProject key={project.title} project={project} />;
              })}
            </section>
          </ScrollAnimation>
        </section>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.element.isRequired,
      previewImg: PropTypes.string.isRequired,
      previewImgLg: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  miniProjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.element.isRequired,
      previewImg: PropTypes.string.isRequired,
      previewImgLg: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Projects;
