import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div  >
            <div className="contact-page" style={{overflow:'auto'}}>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

            <Header />
            <div className="scroll-box-container" style={{backgroundColor:'white'}}>
            <p><h1 style={{textAlign:"center" , color:'dodgerblue'}}> Contact Us</h1></p>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2><b>General Enquiries</b></h2>
            <p><b>Vivekanand College Main Campus</b>
                <br/>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                <br/>India<br/>
                <br/>Phone:<b> +91 12345 67890</b>
                <br/>Email: <b>info@vivekanandcollege.edu</b>
                <br/>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>   
            <p><h2>Admissions Office</h2>
                For all admission-related queries regarding undergraduate or postgraduate programs:
                <br/>Phone: +91 98765 43210
                <br/>Email: admissions@vivekanandcollege.edu</p>
            <p><h2>Student Support Services</h2>
                For current student support, academic advising, or general assistance:
                <br/>Phone: +91 87654 32109
                <br/>Email: studentsupport@vivekanandcollege.edu</p>    
            <h2><strong>Find Us on the Map</strong></h2>
            <Link to="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer"><u>View us on map</u></Link>
            <h2><b>Send Us a Message</b></h2>
            
            
            <p>
                [A contact form with fields for Name, Email, Subject, Message can be added here.] 
            </p>
            {/*<form>
                <label for="name">Name : </label>
                <input type="text" name="name" id="name" /><br/>
                <label for="email">Email : </label>
                <input type="email" name="email" id="email"/><br/>
                <label for="message">Your Message : </label>
                <textarea id="message" name="message" rows="4" cols="50" ></textarea>

            </form>*/}
            </div>
        </div>
        </div>
    )
}


export default ContactPage;