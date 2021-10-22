import './Form.css'
import contact_img from './contact.png'

const Form = () => {
    return ( 
        <div className="form-container">
                <div className="form-row">
                    <div className="form-img">
                        <img src={contact_img} alt="hands" className="form-img"/>
                    </div>
                    <div className="container-col">
                        <div className="form-col">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="form-col">
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Service Needed"/>
                        </div>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="Send Message" />
                    </div>
                </div>
        </div>   
     );
}
 
export default Form;