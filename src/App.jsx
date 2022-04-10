import { useState, useEffect } from "react";
import "./App.css";
import {useLocalStorage} from "react-use";
import Navbar from "./components/Navbar";
import Cardcep from "./components/Cardcep";
import SearchCep from "./components/SearchCep";
import Results from "./components/Results";
import Loading from "./components/Loading";
import Error from "./components/Erro";


function App() {
  const 
  const [cep, setCep] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const [searchcep, SetSearchCep] = useState()


  useEffect(() => {
    handleRequestApi();
  }, []);
    
  
  async function handleRequestApi(){
    try {
     const response = await fetch(`https://viacep.com.br/ws/${searchcep}/json/`);
      const {cep, logradouro, complemento,bairro,localidade,uf} = await response.json();
      console.log(cep,logradouro,complemento,bairro,localidade, uf);
      
      const currentCep = {
        cep, logradouro, complemento,bairro,uf
      }
        setCep(currentCep);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-card">
        <SearchCep searchcep={searchcep} SetSearchCep={SetSearchCep} handleRequestApi={handleRequestApi}/>
        {loadingResults && <Loading/>}
        {showResults && <Results/>}
        <Cardcep cep={cep.cep} logradouro={cep.logradouro} 
        complemento={cep.complemento} bairro={cep.bairro} localidade={cep.localidade}
         uf={cep.uf}/>
      </div>
    </div>
  );
}

export default App;
