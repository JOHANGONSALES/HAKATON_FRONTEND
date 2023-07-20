import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home.jsx"
import Favoritos from "../src/components/pages/Favoritos"
import Shopping from "../src/components/pages/Shopping"
import Laptop from "../src/components/pages/Laptop.jsx"
import Moviles from "../src/components/pages/Moviles.jsx"
import Accesorios from "../src/components/pages/Accesorios"


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element= {<Home/>}></Route> 
        <Route path="/Favoritos" element= {<Favoritos/>}></Route> 
        <Route path="/Shopping" element={<Shopping/>}></Route>   
        <Route path="/Laptop" element={<Laptop/>}></Route>
        <Route path="/Moviles" element={<Moviles/>}></Route>
        <Route path="/Accesorios" element={<Accesorios/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
