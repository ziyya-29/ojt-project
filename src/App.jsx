import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import './styles/Pages.css';
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div className="book">
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ziya Kamalhussain Mangave"
          studentPhotoUrl="/Images/ziya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admission" element={<AdmissionPage />} />
        </Routes>
      </Router>
      <ChatbotComponent/>
      <Footer/>
    </div>
  )
}

export default App;