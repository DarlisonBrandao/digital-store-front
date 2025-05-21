const Login = () => {
  return (  
    <div>
      <div className="bg-white p-[30px] rouded xl:w-[580px]">      
          <form>
              <h4 className="text-center font-bold text-[22px] leading-[34px] xl:text-left xl:mb-5">Acesse sua conta</h4>
              <p className="text-grafite mb-[30px]text-center xl:text-left">Novo cliente? Então registre-se <a href="" className="underline hover:text-rosa">aqui</a>.</p>
              <label> Login*</label>
              <input  type="text"
                      placeholder="Insira seu login ou email"
                      className="bg-grafite/5 rounded w-full mb-5" />
          </form>
      </div>
    </div>
  );
}

export default Login;