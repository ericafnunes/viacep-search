import Navbar from "../Navbar";
import SearchCep from "../SearchCep";

function Results(){
    return (
      <div className="App">
        <Navbar />
        <div className="container-card">
        <p>Resultados para o CEP 60130-440</p>
        <ul>
          <li><b>Rua:</b>São Paulo</li>
          <li><b>Cidade:</b>Maringá</li>
        </ul>
        <SearchCep/>
        </div>
      </div>
    );
  }


  export default Results;