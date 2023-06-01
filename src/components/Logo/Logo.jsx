import LogoIcon from 'icon/Logo';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return <NavLink to="/">{LogoIcon}</NavLink>;
};

export default Logo;
