import Header from "../components/Header/Header";
import './HomePage.css';

const HomePage = () => {
    return(
        <div style={{overflow:'auto'}}>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <Header/>
            <div className="scroll-box-container" style={{backgroundColor:'white'}}>
                
            <div className="hero2">
                <img alt="vivekanand college" src="/Images/college-banner.png" className="hero-image"/>
                <div className="hero-overlay-text">
            <h1 style={{ color:"white"}} >Welcome to Vivekanand College !</h1>
            <p style={{ color:"whitesmoke"}} >Your journey to exellence starts here.</p>
            <a className="btn hero-btn" href="/admission" data-discover="true"><u>Apply now !</u></a>
            </div>
            </div>
            <p>
                Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development.Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
                <br/>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p>
            <ul><strong>Why Choose Vivekanand College?</strong>
                <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
            </ul>
            <h2><b>Campus Life & Facilities</b></h2>
            <div  className='image-row img' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <img alt="students studying in library" src="/Images/students-studying-DbLGuwF_.jpeg" style={{height:'auto' , width:'400px'}} />
                <img alt="campus " src="/Images/campus-life-Crkero7B.jpg" style={{height:'auto' , width:'400px'}} />
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
            <br/><br/>
            </p>
            <h3 style={{textAlign:'center'}}>Ready to explore our courses?</h3>
            <div style={{display:'flex',justifyContent:'center'}}>
            <a className="nav-item btn" href="/courses" data-discover="true" >Explore Courses</a>  
            </div>
            </div> 
        </div>
    )
}

export default HomePage;