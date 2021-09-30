import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <div>
                <h1>Life Strategies</h1>
            </div>

            <ul className="links">
                <li><a>Counseling</a></li>
                <li><a>Coaching</a></li>
                <li><a>Women's Health</a></li>
                <li><a>Faith Based</a></li>
                <li><a>About</a></li>
            </ul>     
        </nav>
     );
}
 
export default Nav;