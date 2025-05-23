
import LoginProvider from "./contexts/LoginContext";
import Paths from "./routes/paths";

const App = () => {
  return (    
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>


    </>
  );
};

export default App;
