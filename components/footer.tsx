import { memo } from 'react'

const Footer = memo(() => (
  <footer className="footer">
    <nav>
      <ul className="footer__media">
        <li>
          <a href="https://twitter.com/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-twitter" />
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/deveroalex" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-facebook" />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-instagram" />
          </a>
        </li>

        <li>
          <a href="https://cz.linkedin.com/in/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-linkedin" />
          </a>
        </li>

        <li>
          <a href="https://dribbble.com/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-dribbble" />
          </a>
        </li>

        <li>
          <a href="https://github.com/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-github" />
          </a>
        </li>

        <li>
          <a href="https://codepen.io/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-codepen" />
          </a>
        </li>

        {/*<li>
          <a href="https://angel.co/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-angellist" />
          </a>
        </li>*/}

        {/* <li>
          <a href="https://stackoverflow.com/story/alexdevero" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-stack-overflow" />
          </a>
        </li> */}
      </ul>
    </nav>

    <small className="footer__copy">
      {/* Copyright &copy; <time dateTime={new Date()}>{new Date().getFullYear()}</time> Alex Devero */}
    </small>
  </footer>
))

Footer.displayName = 'Footer'

export default Footer
