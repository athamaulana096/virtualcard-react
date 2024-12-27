import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="card">
      <div className="top">
        <div className="social-buttons">
          <button>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="desc">
          <h3>Atha Maulana</h3>
          <p>Highly adaptable to new environments, which increases their social sense and empathy towards others. Good judgment skills, and able to work collaboratively.</p>
        </div>
        <div className="buttons">
          <button>
            🏀
            <i /> Sport
          </button>
          <button>
            🎮
            <i /> Gaming
          </button>
          <button>
            🧑🏻‍💻
            <i /> Web Development
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
