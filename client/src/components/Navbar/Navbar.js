import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <navbar className="navbar">
            <ul>
                <li><a href="#"><Link to="/about">Homepage</Link></a></li>
                <li><a href="#"><Link to="/contact">My Listings</Link></a></li>
            </ul>
        </navbar>
    );
}