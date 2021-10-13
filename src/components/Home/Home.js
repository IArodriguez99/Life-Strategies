import './Home.css'
import headshot from './Holding.png'

const Home = () => {
    return ( 
        <div className="container-home">
            <div className="home-row">
                <div className="home-col">
                    <h1>Determined to strategize a better life.</h1>
                    <p className="home-p">Working together to transform the emotional, psychological and spiritual well-being of individuals, families, organizations, and communities.</p>
                    <button className="btn1">Make an Appointment</button>
                </div>
                <div>
                    <img src={headshot} alt="homeimage" className="headshot"/>
                </div>   
            </div>
        </div>
     );
}
 
export default Home;