import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProjectInfo from "./components/Portfolio/ProjectInfo";
import CustomToastContainer from "./components/ToastContainer/CustomToastContainer";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <main>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projectInfo/:ID" element={<ProjectInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Navbar>
      <CustomToastContainer />
    </main>
  );
}
export default App;
