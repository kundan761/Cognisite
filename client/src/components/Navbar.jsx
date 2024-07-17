// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/result" className="navbar-link">Result</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
