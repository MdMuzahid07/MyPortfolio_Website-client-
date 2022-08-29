import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Navbar>
    </main>
  );
}
export default App;
