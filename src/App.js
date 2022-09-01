import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProjectInfo from "./components/Portfolio/ProjectInfo";
import Toast_Container from "./components/ToastContainer/Toast_Container";
// import Projects from "./components/Portfolio/Projects";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Terms_and_conditions from "./pages/Terms_and_conditions";

function App() {
  return (
    <main>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/project" element={<ProjectInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms_and_conditions />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Navbar>
      <Toast_Container />
    </main>
  );
}
export default App;
