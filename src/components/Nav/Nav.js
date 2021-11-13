import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return ( 
        <nav>
            <div>
                <Link to= '/'><h2>Life Strategies</h2></Link>
            </div>

            <ul className="links">
                <Link to='/counseling'><li>Counseling</li></Link>
                <li><a>Coaching</a></li>
                <li><a>Women's Health</a></li>
                <Link to='/faith'><li>Faith Based</li></Link>
                <li><a>About</a></li>
                <button className="nav-btn">Contact</button>
            </ul>     
        </nav>
     );
}
 
export default Nav;