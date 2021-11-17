import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-container">
            <nav>
                <div>
                    <Link to= '/'><h2>Life Strategies</h2></Link>
                </div>

                <ul className="links">
                    <Link to='/counseling'><li>Counseling</li></Link>
                    <li><a>Coaching</a></li>
                    <li><a>Women's Health</a></li>
                    <Link to='/faith'><li>Faith Based</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <button className="nav-btn">Contact</button>
                </ul>     
            </nav>
        </div>
     );
}
 
export default Nav;