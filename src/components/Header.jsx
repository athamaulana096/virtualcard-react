import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="social-buttons">
      <button className="linkedin" href="https://www.linkedin.com/in/athamaulana/">
        <i>
          <FontAwesomeIcon icon={faLinkedin} />
        </i>
      </button>
      <button className="github" href="https://github.com/athamaulana096">
        <i>
          <FontAwesomeIcon icon={faGithub} />
        </i>
      </button>
    </div>
  );
}

export default Header;
