import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
