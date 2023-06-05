const PokemonList = ({ pokemons }) => {
  //const [pokemon, setPokemon] = useState('');
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <p key={pokemon.name}>
            {pokemon.url} -------- {pokemon.name}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonList;
