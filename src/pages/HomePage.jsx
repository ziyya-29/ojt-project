import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div >
            <Header/>
            <h1>Welcome to Vivekanand College !</h1>
            <p style={{textAlign:"center"}} >Your journey to exellence starts here</p>
            <button type="button" name="btn" id="btn" value="Apply now" style={{textAlign:"center",backgroundColor:"green"}} ><u>Apply now!</u></button>
            <p>
                Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. <br/>Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
                <br/><br/>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.<br/> Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p>
            <ul><strong>Why Choose Vivekanand College?</strong>
                <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
            </ul>
            <h2><b>Campus Life & Facilities</b></h2>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
                <br/><br/><h3>Ready to explore our courses?</h3></p>
            <button type="button" name="buton" id="Buton" value="course" style={{textAlign:"center",backgroundColor:"green"}} >Explore courses</button>    

        </div>
    )
}

export default HomePage;