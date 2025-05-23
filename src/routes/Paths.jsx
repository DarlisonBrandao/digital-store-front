import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pajes/Home";
import Produtos from "../pajes/Produtos";
import NotFound from "../pajes/Notfound";
import PageLayout from "../layouts/PageLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pajes/Login";


const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
                

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
