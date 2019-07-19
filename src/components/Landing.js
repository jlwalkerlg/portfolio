import React from 'react';
import Navbar from './Navbar';
import { ReactComponent as GitHubLogo } from '../img/github.svg';
import { ReactComponent as LinkedInLogo } from '../img/linkedin.svg';
import { ReactComponent as LaravelReactSvg } from '../img/laravel-react.svg';

const Landing = () => {
  return (
    <header id="landing" className="landing">
      <Navbar />

      <div className="landing__content container">
        <div className="landing__left">
          <h1 className="landing__heading">Jordan Walker</h1>

          <p className="landing__subheading">
            Full-stack web developer from Bradford, UK.
          </p>

          <div className="landing__actions">
            <button type="button" className="btn btn-outline">
              DOWNLOAD C.V.
            </button>

            <button type="button" className="btn btn-primary">
              CONTACT ME
            </button>
          </div>

          <div className="landing__contact">
            <a href="https://github.com" className="icon-wrap">
              <GitHubLogo className="icon" />
            </a>
            <a href="https://linkedin.com" className="icon-wrap">
              <LinkedInLogo className="icon" />
            </a>
            <a
              href="mailto:walker.jlg@gmail.com"
              className="link link--primary"
            >
              walker.jlg@gmail.com
            </a>
          </div>
        </div>

        <div className="landing__right">
          <div>
            <LaravelReactSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
