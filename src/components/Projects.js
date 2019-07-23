import React from 'react';
import Project from './Project';
import MiniProject from './MiniProject';
import ScrollAnimation from './ScrollAnimation';

// TODO: use smaller images for smaller screens.
import bookablePreview from '../img/bookable-preview@2x.jpg';
import bellonaPreview from '../img/bellona-preview@2x.jpg';
import ingamingPreview from '../img/ingaming-preview@2x.jpg';
import flappyBirdPreview from '../img/flappy-bird-preview@2x.jpg';
import pongPreview from '../img/pong-preview@2x.jpg';

import bookableGif from '../img/bookable.gif';
import bellonaGif from '../img/bellona.gif';
import ingamingGif from '../img/ingaming.gif';
import flappyBirdGif from '../img/flappy-bird.gif';
import pongGif from '../img/pong.gif';

const projects = [
  {
    title: 'Bookable',
    skills: [
      'React | Redux',
      'Laravel | PHP',
      'MySQL',
      'CSS | SASS',
      'Bootstrap',
    ],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
    maiores mollitia nihil nobis eveniet placeat saepe dolore ipsa
    asperiores voluptatem non inventore, earum dicta esse vel,
    reiciendis culpa deleniti aliquam.`,
    previewImg: bookablePreview,
    gif: bookableGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg',
    liveDemoLink: 'https://github.com/jlwalkerlg',
  },
  {
    title: 'Bellona',
    skills: ['PHP', 'MySQL'],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
    maiores mollitia nihil nobis eveniet placeat saepe dolore ipsa
    asperiores voluptatem non inventore, earum dicta esse vel,
    reiciendis culpa deleniti aliquam.`,
    previewImg: bellonaPreview,
    gif: bellonaGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg',
    liveDemoLink: null,
  },
  {
    title: 'inGAMING',
    skills: ['Bellona | PHP', 'MySQL', 'JavaScript', 'CSS | SASS'],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
    maiores mollitia nihil nobis eveniet placeat saepe dolore ipsa
    asperiores voluptatem non inventore, earum dicta esse vel,
    reiciendis culpa deleniti aliquam.`,
    previewImg: ingamingPreview,
    gif: ingamingGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg',
    liveDemoLink: null,
  },
];

const miniProjects = [
  {
    title: 'Flappy Bird',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim ullam a ipsam quae itaque sapiente quasi vero, saepe blanditiis.`,
    previewImg: flappyBirdPreview,
    gif: flappyBirdGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg',
    liveDemoLink: null,
  },
  {
    title: 'Pong',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim ullam a ipsam quae itaque sapiente quasi vero, saepe blanditiis.`,
    previewImg: pongPreview,
    gif: pongGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg',
    liveDemoLink: null,
  },
];

const Projects = () => {
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

export default Projects;
