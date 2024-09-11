import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Works from './Components/Works/Works';
import AboutMe from './Components/AboutMe/AboutMe';
import MessageMe from './Components/MessageMe/MessageMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Define routes for different pages */}
      <Routes>
        {/* Home page (default route) */}
        <Route path="/message-me" element={<MessageMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Works />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
