import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurWorks from "./pages/OurWorks";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurWorksDetail from "./pages/OurWorksDetail";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-works-detail" element={<OurWorksDetail />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
