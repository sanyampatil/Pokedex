import Search from "../Search/Search";
import './pokedex.css'
import PokemonList from "../pokemonList/PokemonList";
function Pokedex(){
    return(
        <div className="pokedex-wraper">
        <h1>Pokedex</h1>

        <Search/>
        <PokemonList/>
        </div>

    )
}
export default Pokedex;