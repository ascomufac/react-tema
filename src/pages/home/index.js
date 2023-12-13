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
        const result = await fetchData();
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
      <Header></Header>
      <Carousel></Carousel>
      {data ? JSON.stringify(data['@id']) : 'Carregando...'} 
      </div>
    </>
  );
}

export default App;
