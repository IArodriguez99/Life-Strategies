import './About.css'
import Maria from './Maria.png'

const About = () => {
    return ( 
        <div className="about-container">
            <div className="about-row">
                <div className="about-col">
                    <h3>About</h3>
                    <h1>Lorem ipsum dolor sit amet risus nullam</h1>
                    <p>Working together to transform the emotional, psychological and spiritual well-being of individuals, families, organizations, and communities.</p>
                    <button className="about-btn">Learn More</button>
                </div>
                <div>
                    <img src={Maria} alt="aboutimage" className="maria"/>
                </div>
            </div>
        </div>
    );
}
 
export default About;