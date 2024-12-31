import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialMedia = [
  {
    className: 'linkedin',
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/athamaulana/',
  },
  {
    className: 'github',
    icon: faGithub,
    href: 'https://github.com/athamaulana096',
  },
];

function SocialButton({ className, icon, link }) {
  return (
    <button className={className} onClick={() => window.open(link, '_blank')}>
      <i>
        <FontAwesomeIcon icon={icon} />
      </i>
    </button>
  );
}

function Header() {
  return (
    <div className="social-buttons">
      {socialMedia.map((data, index) => (
        <SocialButton className={data.className} icon={data.icon} link={data.href} />
      ))}
    </div>
  );
}

export default Header;
