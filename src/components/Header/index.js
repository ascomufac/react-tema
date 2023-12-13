import "./styles.css"
import logo from '../../assets/logo.png'


const Header = () => {
  return (
    <header>
    

        <div className="barra-nome-portal">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="conteudo">
          <div className="menu">

          </div>
          <div className="titulo">
            <h1>Título do Header</h1>
            <h2>Subtitulo do HEADER</h2>
          </div>
          <div className="links">
            <ul>
              <li>
                  Link de acesso 1
              </li>
              <li>
                  Link de acesso 2
              </li>
              <li>
                  Link de acesso 3
              </li>
            </ul>

          </div>
          
          

        </div>
        
    </header>
  )
}

export {Header};
