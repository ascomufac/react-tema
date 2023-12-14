import "./styles.css"
import logo from '../../assets/logo.png'
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';

const Header = (props) => {

const [data_servicos, setData_servicos] = useState(null);
const [data_logo, setData_logo] = useState(null);

useEffect(() => {
  const carregarServicos = async () => {
    try {
      const result = await fetchData('servicos');
      setData_servicos(result);
    } catch (error) {
      // Tratar erros, se necessário
    }
  };
  carregarServicos();

  const carregarLogo = async () => {
    try {
      const result = await fetchData('@site');
      setData_logo(result);
    } catch (error) {
      // Tratar erros, se necessário
    }
  };
  carregarLogo();
}, []);
  
  return (
    <header>
    

        <div className="barra-nome-portal">
          <img src={data_logo ? data_logo['plone.site_logo'] : logo} alt="Logo" />
        </div>
        
        <div className="conteudo">
          <div className="menu">

          </div>
          <div className="titulo">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </div>

          


          <div className="links">
          
            <ul>
            {data_servicos ? (<> 
            {data_servicos.items.map(repo => (
              <li><a href={repo['@id']}>{repo.title}</a></li>
            ))}
          </>) : "Carregando"}
            </ul>

          </div>
          
          

        </div>
        
    </header>
  )
}

export {Header};
