import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testimonial" element={<Testimonial />} />
           </Routes>
        </main>

       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
