import './Service_Row.css'

const Service_Row = () => {
    return ( 
        <div className="service_container">
            <div className="service_row">
                <div className="service_col">
                    <h3>Marriage and Relationships</h3>
                    <p>Our experienced counselor will discuss personality profiles, marriage expectations, and even family genograms in order to help you create the stability and support that are essential for a healthy marriage</p>
                </div>
                <div className="service_col">
                    <h3>Women's Health</h3>
                    <p>Find a supportive space for all of your women's health concerns, including postpartum depression, loneliness, empty nest difficulties, self-esteem, self-identity, and working through past or present trauma. </p>
                </div>
                <div className="service_col">
                    <h3>Grief</h3>
                    <p>Take advantage of our group counseling services which includes divorce care, marriage groups, singles groups, and even a mother/daughter options. </p>
                </div>
            </div>
        </div>
     );
}
 
export default Service_Row;