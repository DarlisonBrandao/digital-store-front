import Banner from "./components/Banner";
import Destaques from "./components/Destaques";
import Footer from "./components/Footer";
import Header from "./components/header";
import Oferta from "./components/Oferta";
import Produtos from "./components/Produtos";


const App = () => {
  return ( 
    <>
      <Header />
      <Banner />
      <Produtos />
      <Oferta />
      <Destaques />
      <Footer />
    </>
   );
}
 
export default App;


