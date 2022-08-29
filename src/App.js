import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms_and_conditions />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Navbar>
    </main>
  );
}
export default App;
