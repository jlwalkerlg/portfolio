import React from 'react';
// TODO: use smaller images for smaller screens.
import bookablePreview from '../img/bookable-preview@2x.jpg';
import bellonaPreview from '../img/bellona-preview@2x.jpg';
import ingamingPreview from '../img/ingaming-preview@2x.jpg';
import flappyBirdPreview from '../img/flappy-bird-preview@2x.jpg';
import pongPreview from '../img/pong-preview@2x.jpg';
import Project from './Project';
import MiniProject from './MiniProject';

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
  },
  {
    title: 'Bellona',
    skills: ['PHP', 'MySQL'],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
    maiores mollitia nihil nobis eveniet placeat saepe dolore ipsa
    asperiores voluptatem non inventore, earum dicta esse vel,
    reiciendis culpa deleniti aliquam.`,
    previewImg: bellonaPreview,
  },
  {
    title: 'inGAMING',
    skills: ['Bellona | PHP', 'MySQL', 'JavaScript', 'CSS | SASS'],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
    maiores mollitia nihil nobis eveniet placeat saepe dolore ipsa
    asperiores voluptatem non inventore, earum dicta esse vel,
    reiciendis culpa deleniti aliquam.`,
    previewImg: ingamingPreview,
  },
];

const miniProjects = [
  {
    title: 'Flappy Bird',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim ullam a ipsam quae itaque sapiente quasi vero, saepe blanditiis.`,
    previewImg: flappyBirdPreview,
  },
  {
    title: 'Pong',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim ullam a ipsam quae itaque sapiente quasi vero, saepe blanditiis.`,
    previewImg: pongPreview,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center">Projects.</h2>

        {projects.map((project, index) => {
          const reversed = index % 2 !== 0;
          return <Project key={index} project={project} reversed={reversed} />;
        })}

        <section className="section">
          <h3 className="text-center">Mini Projects.</h3>

          <section className="mini-projects mt-5">
            {miniProjects.map((project, index) => {
              return <MiniProject key={index} project={project} />;
            })}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Projects;
