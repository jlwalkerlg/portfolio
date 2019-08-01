import React from 'react';

import bookablePreview from '../img/bookable-preview.jpg';
import bookablePreviewLg from '../img/bookable-preview@2x.jpg';
import bellonaPreview from '../img/bellona-preview.jpg';
import bellonaPreviewLg from '../img/bellona-preview@2x.jpg';
import ingamingPreview from '../img/ingaming-preview.jpg';
import ingamingPreviewLg from '../img/ingaming-preview@2x.jpg';
import flappyBirdPreview from '../img/flappy-bird-preview.jpg';
import flappyBirdPreviewLg from '../img/flappy-bird-preview@2x.jpg';
import pongPreview from '../img/pong-preview.jpg';
import pongPreviewLg from '../img/pong-preview@2x.jpg';

import bookableGif from '../img/bookable.gif';
import bellonaGif from '../img/bellona.gif';
import ingamingGif from '../img/ingaming.gif';
import flappyBirdGif from '../img/flappy-bird.gif';
import pongGif from '../img/pong.gif';
import Projects from './Projects';

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
    description:
      'A cross between a book ecommerce store and a book cataloging application that allows users to search, purchase, review, and shortlist books.',
    about: (
      <>
        <p>
          Bookable was the first major project I started after learning the
          basics of Laravel and React. I wanted to challenge myself and take my
          skills in these technologies to the next level, so I decided to
          develop a website that was quite ambitious in scale as a beginner to
          Laravel/React, and was similar in scope to a real-world application
          like Goodreads.
        </p>
        <p>
          I decided to focus on books so that I could collect data from the
          Goodreads API to add to my database. To do so I used Python to scrape
          a popular list of books for IDs, and used these to query their API for
          details about the books and their author.
        </p>
        <p>
          I also wanted to use React since it is very popular in the web
          development community and since I wanted to have a lot of dynamic user
          interaction in the UI, such as add/removing items from a
          wishlist/cart/shelf, adding reviews, updating ratings etc.
        </p>
      </>
    ),
    previewImg: bookablePreview,
    previewImgLg: bookablePreviewLg,
    gif: bookableGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg/bookable',
    liveDemoLink: 'http://bookable.walkerjordan.com',
  },
  {
    title: 'Bellona',
    skills: ['PHP', 'MySQL'],
    description:
      'A custom PHP framework heavily inspired by Laravel, with a service container, dependency injection, implicit model binding, facades, explicit routing, middleware, a query builder, in-built CSRF protection, support for MVC architecture, and more.',
    about: (
      <>
        <p>
          Bellona started out as a miniature PHP framework I built during a
          course on the MVC design pattern, which had nothing more than a
          router, a controller, and a model.
        </p>
        <p>
          By the end of the course I was inspired to build on what I had learned
          and add more features. The first thing I changed was to switch from an
          implicit to an explicit routing system, since it had felt very
          intuitive when working with the Express NodeJS framework. I
          didn&apos;t know Laravel at the time but I was aware of it&apos;s
          explicit routing system so I looked at their syntax and it felt very
          clean and intuitive, so I implemented a simliar API.
        </p>
        <p>
          From there on, the API for each new feature I added to the framework
          was more or less inspired by Laravel. However, I still hadn&apos;t
          learned Laravel so was&apos;t aware of their use of facades &mdash;
          most feature implementations used static class methods.
        </p>
        <p>
          Later, I refactored the whole framework to also use PHP magic methods
          to proxy static class method calls through to instance methods, as do
          Laravel&apos;s facades, and released the new framework as a new
          project.{' '}
          <a href="https://github.com/jlwalkerlg/jwmvc">The original project</a>{' '}
          is also available on GitHub.
        </p>
      </>
    ),
    previewImg: bellonaPreview,
    previewImgLg: bellonaPreviewLg,
    gif: bellonaGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg/bellona-framework',
    liveDemoLink: null,
  },
  {
    title: 'inGAMING',
    skills: ['Bellona | PHP', 'MySQL', 'JavaScript', 'CSS | SASS'],
    description:
      'A website and CMS built with the Bellona framework, where users can browse and purchase video games, and where admins can manage site content.',
    about: (
      <>
        <p>
          inGAMING was the project I was working on while developing the Bellona
          framework, and is largely a demonstration of the framework in action.
        </p>
        <p>
          The site demonstrates the framework&apos;s explicit routing system,
          use of policies for defining user permissions, active record pattern,
          query builder, extendable view layout templates, service container,
          dependency injection, implicit model binding, and everything else the
          framework has to offer.
        </p>
        <p>
          The application integrates with the Braintree API for collecting
          payments as users can add games to their cart and buy them through the
          checkout process.
        </p>
        <p>
          The CMS allows admin to access a dashboard from which they can perform
          all the essential CRUD operations for the games in the database, as
          well as setting the featured book that is displayed on the landing
          page.
        </p>
      </>
    ),
    previewImg: ingamingPreview,
    previewImgLg: ingamingPreviewLg,
    gif: ingamingGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg/ingaming',
    liveDemoLink: 'http://ingaming.walkerjordan.com',
  },
];

const miniProjects = [
  {
    title: 'Flappy Bird',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description:
      'An implementation of the popular Flappy Bird video game, using HTML5 Canvas and plain object-oriented JavaScript.',
    about: (
      <>
        <p>
          Flappy Bird was the second game I built with the HTML5 Canvas API,
          after Pong, which allowed me to practice the object-oriented
          JavaScript patterns I had learned by doing so.
        </p>
        <p>
          The game works with the local storage API to save high scores, and the
          HTML &lang;audio&rang; element to play souonds effects.
        </p>
      </>
    ),
    previewImg: flappyBirdPreview,
    previewImgLg: flappyBirdPreviewLg,
    gif: flappyBirdGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg/flappy-bird',
    liveDemoLink: 'https://jlwalkerlg.github.io/flappy-bird',
  },
  {
    title: 'Pong',
    skills: ['JavaScript', 'HTML5 Canvas'],
    description:
      'A classic. Written in plain object-oriented JavaScript using the HTML5 Canvas API.',
    about: (
      <>
        <p>
          Pong was the first game I built with the HTML5 Canvas API in plain
          JavaScript. I decided to build a game since they lend themselves well
          to an object-oriented approach and I wanted to practice this with
          JavaScript.
        </p>
        <p>
          The game has a menu system where the player can choose between 1
          player and 2 player mode, and also choose their preferred control
          scheme in 1 player mode: keyboard or mouse.
        </p>
        <p>
          The game also works with the local storage API to store high scores.
        </p>
      </>
    ),
    previewImg: pongPreview,
    previewImgLg: pongPreviewLg,
    gif: pongGif,
    sourceCodeLink: 'https://github.com/jlwalkerlg/pong',
    liveDemoLink: 'https://jlwalkerlg.github.io/pong',
  },
];

const ProjectsContainer = () => {
  return <Projects projects={projects} miniProjects={miniProjects} />;
};

export default ProjectsContainer;
