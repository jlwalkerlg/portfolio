import React from 'react';
import { ReactComponent as CodingSvg } from '../img/undraw_coding_6mjf.svg';

const About = () => {
  return (
    <article id="about">
      <div className="about__container container">
        <div className="about__left">
          <div>
            <CodingSvg width="100%" height="100%" />
          </div>
        </div>
        <div className="about__right ml-5">
          <h2 className="mb-0">About Me.</h2>

          <p className="text-body mt-2 mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            incidunt. Consequatur pariatur cupiditate, reprehenderit eligendi,
            vel ipsum nemo delectus, atque quam optio commodi! Enim obcaecati
            ducimus atque repellendus repellat saepe expedita voluptates numquam
            sint consectetur cum, quibusdam vero nam dolore? Magnam, iure animi!
            Tempora aliquid suscipit optio a consequatur sint.
          </p>

          <div className="btn btn--primary mt-4">DOWNLOAD C.V.</div>
        </div>
      </div>
    </article>
  );
};

export default About;
