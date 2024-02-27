import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='gray-container nav'>
      <ul>
        <li className='link'><Link to="/">Home</Link></li>
        <li className='link'><Link to="/about">About</Link></li>
        <li className='link'><Link to="/projects">Projects</Link></li>
        <li className='link'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;