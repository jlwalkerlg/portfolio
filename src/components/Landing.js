import React from 'react';
import Navbar from './Navbar';
import ScrollAnimation from './ScrollAnimation';
import { ReactComponent as GitHubLogo } from '../img/github.svg';
import { ReactComponent as LinkedInLogo } from '../img/linkedin.svg';
import { ReactComponent as LaravelReactSvg } from '../img/laravel-react.svg';

const Landing = () => {
  return (
    <header id="landing" className="landing">
      <Navbar />

      <div className="landing__container container">
        <div className="landing__left">
          <ScrollAnimation animation="fadeInDown">
            <h1 className="mt-0 mb-0">Jordan Walker</h1>

            <p className="landing__subheading mt-2 mt-md-0">
              Full-stack web developer from Bradford, UK.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInDown delay-500">
            <div className="landing__buttons mt-4">
              <button type="button" className="btn btn--outline">
                DOWNLOAD C.V.
              </button>

              <button type="button" className="btn btn--primary">
                CONTACT ME
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp delay-1000">
            <div className="landing__contact">
              <a href="https://github.com" className="icon-wrap mx-2">
                <GitHubLogo className="icon" />
              </a>
              <a href="https://linkedin.com" className="icon-wrap mx-2">
                <LinkedInLogo className="icon" />
              </a>
              <a
                href="mailto:walker.jlg@gmail.com"
                className="link link--primary d-block mt-4 mt-sm-0 ml-0 ml-md-2"
              >
                walker.jlg@gmail.com
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <div className="landing__right">
          <ScrollAnimation animation="fadeInRight delay-1500">
            <LaravelReactSvg width="100%" height="100%" />
          </ScrollAnimation>
        </div>
      </div>
    </header>
  );
};

export default Landing;
