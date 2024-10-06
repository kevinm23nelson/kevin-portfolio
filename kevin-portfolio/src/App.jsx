import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works';
import AboutMe from './Components/AboutMe/AboutMe';
import MessageMe from './Components/MessageMe/MessageMe';
import Footer from './Components/Footer/Footer';
import UtahPage from './Components/UtahPage/UtahPage';
import TaskProPage from './Components/TaskProPage/TaskProPage';
import CryptoPalPage from './Components/CryptoPalPage/CryptoPalPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/message-me" element={<MessageMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Works />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/utah" element={<UtahPage />} />
        <Route path="/taskpro" element={<TaskProPage />} />
        <Route path="/cryptopal" element={<CryptoPalPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
