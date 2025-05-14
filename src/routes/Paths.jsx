import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pajes/Home";
import Produtos from "../pajes/Produtos";

const Paths = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/categorias" element={<Produtos/>}/>
        <Route path="/meus-pedidos" element={<Produtos/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default Paths;