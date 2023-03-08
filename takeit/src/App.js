import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Actualites from "./pages/Actualites";
import Cours from "./pages/Cours";
import Quizz from "./pages/Quizz";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/cours" element={<Cours />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/home" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
