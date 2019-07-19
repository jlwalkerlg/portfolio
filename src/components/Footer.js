import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__list ml-0">
          <p className="text-bold my-0">Connect.</p>

          <ul className="list-unstyled">
            <li className="my-0">
              <a href="https://github.com" className="link link--light">
                GitHub
              </a>
            </li>

            <li className="my-0">
              <a href="https://linkedin.com" className="link link--light">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__list">
          <p className="text-bold my-0">Contact.</p>

          <ul className="list-unstyled">
            <li className="my-0">
              <a
                href="mailto:walker.jlg@gmail.com"
                className="link link--light"
              >
                walker.jlg@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__list ml-auto">
          <p className="text-bold my-0">Download.</p>

          <button type="button" className="btn btn--light">
            DOWNLOAD C.V.
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
