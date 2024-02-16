import { Oval } from 'react-loader-spinner';
import './Loader.scss';

export const Loader: React.FC = () => (
  <Oval
    visible={true}
    height="80"
    width="80"
    color="#ff4040"
    secondaryColor="#6f6f6f"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    strokeWidth={5}
    strokeWidthSecondary={6}
  />
);
