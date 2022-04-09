import Navbar from "../Navbar";
import SearchCep from "../SearchCep";

function Loading(){
    return (
      <div className="App">
        <Navbar />
        <div className="container-card">
        <p>Carregando resultados...</p>
        </div>
      </div>
    );
  }

export default Loading;