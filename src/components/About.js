import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ReactComponent as CodingSvg } from '../img/undraw_coding_6mjf.svg';
import CV from '../assets/cv.pdf';

const About = () => {
  return (
    <article id="about" className="about section">
      <div className="about__container container">
        <div className="about__left">
          <ScrollAnimation animation="fadeInLeft delay-500">
            <CodingSvg width="100%" height="100%" />
          </ScrollAnimation>
        </div>
        <div className="about__right">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="my-0">About Me.</h2>

            <p className="text-body mt-3 mb-0">
              I&apos;m a <strong>full-stack web developer</strong> with a{' '}
              <strong>passion for learning</strong> new technologies and
              programming. I was introduced to <strong>Python</strong> while
              studying Astrophysics and Applied Mathematics at University and
              have since taught myself a host of web technologies including{' '}
              <strong>HTML5</strong>, <strong>CSS3</strong>,{' '}
              <strong>SASS</strong>, <strong>JavaScript</strong>,{' '}
              <strong>PHP</strong>, <strong>Laravel</strong>,{' '}
              <strong>React</strong>, and <strong>Docker</strong>. I plan on
              continually improving my skills in these languages as well as
              picking up new and exciting technologies along the way, with{' '}
              <strong>WordPress</strong> and <strong>GraphQL</strong> currently
              at the top of the list.
            </p>

            <div className="mt-4">
              <a href={CV} className="btn btn--primary" target="__blank">
                DOWNLOAD C.V.
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </article>
  );
};

export default About;
