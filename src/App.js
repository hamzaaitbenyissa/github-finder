import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className='container mx-auto px-3 pb-12'>

              
            </main>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
