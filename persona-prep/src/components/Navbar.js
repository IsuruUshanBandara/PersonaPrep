import logo from '../assets/logo/Persona Prep Dark.png';
import './Navbar.css';

export default function Header() {
    return(
        <nav>
            <ul>
                <li></li>
                <li> <img src={logo} className="navbar-logo"></img>  </li>
                <li></li>
            </ul>
        </nav>
    )
}