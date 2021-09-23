import logo from '../../img/logo.png';
import pokebola from '../../img/pokebola.png';
import { Logo, PokedexContainerImg, CampoDePesquisa } from './PesquisaPokemonWrapper';

export default function PesquisaPokemon(){
    return(
        <>
            <Logo src={logo} alt="pokedexImg"/>
            <PokedexContainerImg>
                <img src={pokebola} alt="pokebolaImg"/>
            </PokedexContainerImg>
            <CampoDePesquisa>
                <p>Digite um nome ou numero do pokemon!</p>
                <input/>
                <button>GO!</button>
            </CampoDePesquisa>
        </>
    )
}