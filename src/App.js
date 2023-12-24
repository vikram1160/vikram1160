import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'    
import NavBar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={< Education />}/>
          <Route path="/technology" element={<Technologies />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          
      </Routes>
          <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
