import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Footer from "./components/pages/footer";
import Products from "./components/pages/products";
import QualityMachinery from "./components/pages/quality-machinery";
import LType from "./components/pages/products/lTypeBlade";
import CType from "./components/pages/products/cTypeBlade";
import MaschioType from "./components/pages/products/maschioTypeBlade";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality-machinery" element={<QualityMachinery />} />
          <Route path="/products/l-type" element={<LType />} />
          <Route path="/products/c-type" element={<CType />} />
          <Route path="/products/maschio-type" element={<MaschioType />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
