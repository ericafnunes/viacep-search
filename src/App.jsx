import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cardcep from "./components/Cardcep";
import Search from "./components/SearchCep"
import SearchCep from "./components/SearchCep";
import Results from "./components/Results";
import Loading from "./components/Loading";
import Error from "./components/Erro";


function App() {
  const [cep, setCep] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);


  useEffect(() => {
    handleRequestApi();
  }, []);

  const handleRequestApi = () => {
    try {
      fetch("https://viacep.com.br/ws/01001000/json/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-card">
        <SearchCep/>
        {loadingResults && <Loading/>}
        {showResults && <Results/>}
      </div>
    </div>
  );
}

export default App;
