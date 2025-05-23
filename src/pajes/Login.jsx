import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";


const Login = () => {
      const { setLogado } = useContext(LoginContext);
      const navigate = useNavigate()

      function onLogin(event){
        event.preventDefault();
        setLogado(true);
        navigate("/")
  }

  return (
    <div>
      <div className="bg-white p-[30px] rouded xl:w-[580px]">
        <form onSubmit={onLogin}>
          <h4 className="text-center font-bold text-[22px] leading-[34px] xl:text-left xl:mb-5">
            Acesse sua conta
          </h4>
          <p className="text-grafite mb-[30px] text-center xl:text-left">
            Novo cliente? Então registre-se <a href="" className="underline hover:text-rosa">aqui.</a>
          </p>
          <label className="block mb-1"> Login *</label>
          <input
            type="text"
            placeholder="Insira seu login ou email"
            className="bg-grafite/5 rounded w-full mb-5 h-[60px] duration-150 outline-transparent focus:outline-rosa pl-4"
          />

          <label className="block mb-1"> Senha *</label>
          <input
            type="text"
            placeholder="Insira sua senha"
            className="bg-grafite/5 rounded w-full mb-[30px] h-[60px] duration-150 outline-transparent focus:outline-rosa pl-4"
          />
          <a href="" className="text-grafite underline hover:text-rosa mb-[30px] block">Esqueci minha senha</a>
          <button 
              className="w-full h-[48px] bg-rosa hover:bg-rosa-hover text-white rounded duration-150 font-bold cursor-pointer"> Acessar Conta

          </button>
        </form>
      </div>
      <div className="hidden">
        
      </div>
    </div>
  );
};

export default Login;
