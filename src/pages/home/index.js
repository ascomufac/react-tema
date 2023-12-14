import {Header} from '../../components/Header'
import { Carousel } from '../../components/Carousel';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';

import "./styles.css"

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData('');
        setData(result);
      } catch (error) {
        // Tratar erros, se necessário
      }
    };

    fetchDataFromAPI();
  }, []);


  return (
    <>
      <div className="App">
      {/* {data ? JSON.stringify(data) : 'Carregando...'} */}
      
      <Header 
        title={data ? data['title'] : "Titulo"} 
        subtitle={data ? data['description']: "Subtitulo"} 
        
        />
      <Carousel></Carousel>
       
      </div>
    </>
  );
}

export default App;
