import './SocialMedia.scss';
import { FaTelegram, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <h3>Our Social Media:</h3>
      <ul>
        <li>
          <a href="#" target="_blanck" rel="noopener nofollow noreferrer">
            <FaTelegram size={28} />
          </a>
        </li>
        <li>
          <a href="#" target="_blanck" rel="noopener nofollow noreferrer">
            <FaInstagram size={28} />
          </a>
        </li>
        <li>
          <a href="#" target="_blanck" rel="noopener nofollow noreferrer">
            <FaFacebook size={28} />
          </a>
        </li>
        <li>
          <a href="#" target="_blanck" rel="noopener nofollow noreferrer">
            <FaYoutube size={28} />
          </a>
        </li>
      </ul>
    </div>
  );
};
