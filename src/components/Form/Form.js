import './Form.css'
import hands from './hands.png'

const Form = () => {
    return ( 
        <div className="form-container">
                <div className="form-row">
                    <div className="form-img">
                    <img src={hands} alt= "hands" className="form-img"/>
                    </div>
                    <div className="form-col">
                        <h2>Get in touch</h2>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Phone Number"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Service Needed"/>
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="Send Message" />
                    </div>
                </div>
        </div>   
     );
}
 
export default Form;