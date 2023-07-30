import { ReactNode } from 'react';
import './styles.scss';

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        <a href="#">LOGO</a>
      </div>
      <div className="menu">
        <div className="menu-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <button className="log-in">Log In</button>
      </div>
      <div className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
