import './ByMe.scss';
import { TfiGithub } from 'react-icons/tfi';

export const ByMe: React.FC = () => {
  const date = new Date();

  return (
    <div className="by-me">
      <p>
        By &nbsp; <span>Vladislav Gulida</span>, my git:
        <a
          href="https://github.com/lezver"
          target="_blanck"
          rel=" noopener nofollow noreferrer"
        >
          <TfiGithub size={24} />
        </a>
      </p>
      <p>
        <span>
          Rent<span>Ride</span>
        </span>
        &nbsp; &#169; 2023 - {date.getFullYear()}
      </p>
    </div>
  );
};
