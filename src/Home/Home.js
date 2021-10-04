import './Home.css'
import 

const Home = () => {
    return ( 
        <div className="container-home">
            <div className="home-row">
                <div className="home-col">
                    <h1>Lorem ipsum dolor sit consect amet.</h1>
                    <p>ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.</p>
                    <button>Make an Appointment</button>
                </div>
                <div className="home-img">
                    <img src={'./Maria.png'} />
                </div>   
            </div>
            
        </div>
     );
}
 
export default Home;