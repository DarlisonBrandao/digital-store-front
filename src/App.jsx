
import LoginProvider from "./contexts/LoginContext";
import CadastrarUsuario from "./pajes/CadastroUsuario";
import Paths from "./routes/paths";

const App = () => {
  return (    
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
      
      <CadastrarUsuario>
        <Paths />
      </CadastrarUsuario>


    </>
  );
};

export default App;
