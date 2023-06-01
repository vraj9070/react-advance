import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
      <Route path="/About" element={<><Header/><About/><Footer/></>}></Route>
      <Route path="/Services" element={<><Header/><Services/><Footer/></>}></Route>
      <Route path="/Portfolio" element={<><Header/><Portfolio/><Footer/></>}></Route>
      <Route path="/Contact" element={<><Header/><Contact/><Footer/></>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
