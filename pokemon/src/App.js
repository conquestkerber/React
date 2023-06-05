import PokemonList from "./PokemonList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const requestData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response.data.results);
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    requestData();
  }, []);

  return (
    <div className="App">
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
