import './Me.css'
import maria from './MariaABT.jpeg'

const Me = () => {
    return ( 
        <div className="Me-container">
            <div className="Me-row">
                <div>
                    <img src={maria} alt="Maria" className="headshot-ABT" />
                </div>
                <div className="Me-col">
                    <p>"It is my mission to treat you with great respect, compassion and understanding by providing a place of comfort and safety.  Your story is important and I am honored to walk with you in your journey of healing"</p>
                </div>
            </div>
            <div className="Me-row-2">
                <p>She'll give you the reassuring support you need during a crisis situation or simply offer a safe place for you to process your feelings, thoughts, and behaviors in confidence. Maria is a Licensed Mental Health Counselor who works with individuals, age 13 and older, who struggle with trauma, anxiety, depression, marital conflicts, and various other life issues that may be plaguing them.
                    Maria uses an eclectic, theoretical approach which organically integrates Cognitive Behavioral Therapy, Narrative Therapy, Brief Therapy, and Experiential Therapy into a singular strategy.
                    <br></br>
                    <br></br>
                    Therapy is about moving forward with your life, while processing your feelings, your thoughts, and your behaviors. Maria can help you hone the skills needed to be able to manage the life that you want to lead.
                    She will help you reframe your thought patterns for a healthier and more creative outlook on life. You can rely on her commitment to confidentiality and ability to make you feel completely comfortable as she allies with you to build trust and move towards healing.
                  </p>
            </div>
        </div>
    );
}
 
export default Me;