import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Portfolio from './pages/Portfolio';


function App() {
  const appStyle = {
    textAlign: "center",
  }
  return (
    <div style={appStyle}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={ <Home />} />
        <Route path="/portfolio" element={ <Portfolio/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
