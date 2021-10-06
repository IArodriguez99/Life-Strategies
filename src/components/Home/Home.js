import './Home.css'
import headshot from './Maria.png'

const Home = () => {
    return ( 
        <div className="container-home">
            <div className="home-row">
                <div className="home-col">
                    <h1>Lorem ipsum dolor sit consect amet.</h1>
                    <p>Ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.</p>
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