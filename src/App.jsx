import { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "main" : "main-light" }>
      <a
        className="div"
        href="https://www.devs4good.com.br"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.devs4good.com.br/assets/header-astronaut-ac0308c6.webp"
          alt=""
        />

        <h1>Formulário Devs4Good</h1>
      </a>
      <br />
      <div className="div">
      <Toggle onToggleDarkMode={handleToggleDarkMode} />
      </div>
      <br />

      <div className={darkMode ? "login-box" : "login-box-light"}>
        <form action="https://formsubmit.co/c6eb04ed677bf6bcfa0a9aee8d879ef6" method="POST">
          <fieldset className="fieldset">
            <legend>Informações</legend>
            <br />
            <br />
            <div className="user-box">
              <label className="label">Nome da sua Empresa/Ong:</label>
              <input
                className="input"
                type="text"
                name="name"
                required=""
                placeholder="Ex Devs4Good"
              />
            </div>
            <div className="user-box">
              <label className="label">Descrição da sua Empresa/Ong:</label>
              <input
                className="input"
                type="text"
                name="desciption"
                required=""
                placeholder="Coloque uma descrição bem completa"
              />
            </div>
          </fieldset>
          <br />
          <br />
          <fieldset>
            <legend>Conteúdo</legend>
            <br />
            <br />
            <div className="user-box">
              <label className="label">Logo:</label>
              <input
                className="input"
                type="text"
                name="logo"
                required=""
                placeholder="Coloque o url do seu logo"
              />
            </div>
            <div className="user-box">
              <label className="label">Fotos:</label>
              <input
                className="input"
                type="text"
                name="fotos"
                required=""
                placeholder="Coloque o url das melhores fotos, separados por vírgula"
              />
            </div>

            <div className="user-box user-box-color">
              <label className="label">
                Quais as cores principais do seu site?
              </label>
              <br />
              <br />
              <input
                className="color"
                type="color"
                name="cor1"
                required=""
                defaultValue="#0af50a"
              />
              <input
                className="color"
                type="color"
                name="cor2"
                required=""
                defaultValue="#FFF200"
              />
              <input
                className="color"
                type="color"
                name="cor3"
                required=""
                defaultValue="#FF0000"
              />
            </div>
            <br />
            <br />
            <div className="user-box">
              <label className="label">Colaboradores/Funcionários:</label>
              <input
                className="input"
                type="text"
                name="colaboradores"
                required=""
                placeholder="Coloque os nomes e cargos de todos os colaboradores"
              />
            </div>
          </fieldset>

          <center>
            <button type="submit">
              enviar
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default App;
