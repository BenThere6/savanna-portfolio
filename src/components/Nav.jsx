import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='gray-container nav'>
      <ul className='nav-ul'>
        <li className='link nav-li'><Link to="/">About</Link></li>
        <li className='link nav-li'><Link to="/projects">Projects</Link></li>
        <li className='link nav-li'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;