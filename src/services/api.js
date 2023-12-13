import axios from 'axios';

const API_URL = 'http://200.129.173.67:8080/Portal';
// const caminho = 'home';

export const fetchData = async () => {


    // const userData = await fetch(`http://200.129.173.67:8080/${caminho}`,
    // {
    //   headers: {Accept: 'application/json', Authorization: 'Basic YWRtaW46YWRtaW4='}
      
    // }
    // );


  try {
    const response = await axios.get(`${API_URL}`,{
        headers:{Accept: 'application/json', Authorization: 'Basic YWRtaW46YWRtaW4='
    }});
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};
