import logo from '../../img/logo.png';
import pokebola from '../../img/pokebola.png';
import { Paragrafo } from '../styles';
import { Logo, PokedexContainerImg, CampoDePesquisa, ButtonGo, ImgPokebola, DigitePokemon } from './PesquisaPokemonWrapper';

export default function PesquisaPokemon(){

    function chamadaPkm(e){
        e.preventDefault()
        console.log("Testando");
    };
    return(
        <>
            <Logo src={logo} alt="pokedexImg"/>
            <PokedexContainerImg>
                <ImgPokebola src={pokebola} alt="pokebolaImg"/>
            </PokedexContainerImg>
            <CampoDePesquisa>
                <Paragrafo>Digite um nome ou numero do pokemon!</Paragrafo>
                <DigitePokemon />
                <ButtonGo onClick={chamadaPkm}>GO!</ButtonGo>
            </CampoDePesquisa>
        </>
    )
}