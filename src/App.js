import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Services from "./Pages/AboutUs";
import Footer from "./Components/Footer"
import NavBar from "./Components/Navbar";
import GameDetails from './Pages/GameDetails'; 

function App() {
  return (
   <div>
    <NavBar/><br/><br/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Articles" element={<Articles/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/game/:name" element={<GameDetails />} />
      </Routes><br/>
      <Footer/>
   </div>
  );
}

export default App;
