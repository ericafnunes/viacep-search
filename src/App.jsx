import { useState, useEffect } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";
import Navbar from "./components/Navbar";
import Cardcep from "./components/Cardcep";
import SearchCep from "./components/SearchCep";
import ErroAlert from "./components/ErroAlert";



function App() {
  const [cacheSearch, setCacheSearch, removeCacheSearch] = useLocalStorage(
    "cepSearch",
    []
  );
  const [cep, setCep] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [searchcep, SetSearchCep] = useState("");
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    saveInCache();
  }, [cep]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowResults(false);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showResults]);


  function checkInCache() {
    return cacheSearch.find((item) => item.cep === searchcep);
  }


  function saveInCache() {
    return setCacheSearch([...cacheSearch, cep]);
  }


  async function handleFindCep() {
    const result = checkInCache();
    if (result) {
      return setCep(result);
    }
    await handleRequestApi();
  }

  
  async function handleRequestApi() {
    
    try {
      setLoading(true);
      const response = await fetch(
        `https://viacep.com.br/ws/${searchcep}/json/`
        );
        const { cep, logradouro, complemento, bairro, localidade, uf } =
        await response.json();
        console.log(cep, logradouro, complemento, bairro, localidade, uf);
        
        const currentCep = {
          cep,
          logradouro,
          complemento,
          bairro,
          localidade,
          uf,
      };
      setLoading(false);
      setCep(currentCep);
    } catch (error) {
      setShowResults(true);
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="loader">
      </div>
      <div className="container-card">
        {showResults && <ErroAlert />}
        {loading && <span>Carregando&nbsp;<i className="w3-spin fa fa-refresh"></i>
</span>}
        <SearchCep
          searchcep={searchcep}
          SetSearchCep={SetSearchCep}
          handleFindCep={handleFindCep}
        />
        <Cardcep
          cep={cep.cep}
          logradouro={cep.logradouro}
          complemento={cep.complemento}
          bairro={cep.bairro}
          localidade={cep.localidade}
          uf={cep.uf}
        />
      <button className="save-cep">Salvar cep</button>
      </div>
    </div>
  );
}

export default App;
