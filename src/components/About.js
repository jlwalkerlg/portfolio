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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              incidunt. Consequatur pariatur cupiditate, reprehenderit eligendi,
              vel ipsum nemo delectus, atque quam optio commodi! Enim obcaecati
              ducimus atque repellendus repellat saepe expedita voluptates
              numquam sint consectetur cum, quibusdam vero nam dolore? Magnam,
              iure animi! Tempora aliquid suscipit optio a consequatur sint.
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
