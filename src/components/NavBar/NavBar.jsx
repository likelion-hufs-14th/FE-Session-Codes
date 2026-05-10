// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title">
                LikeLion HUFS 블로그
            </Link>
        </nav>
    );
}
