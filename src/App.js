import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
