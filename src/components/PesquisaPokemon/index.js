import logo from '../../img/logo.png';
import styled from "styled-components";
import pokebola from '../../img/pokebola.png';
import { useState } from 'react';
import axios from 'axios';
import { Paragrafo } from '../styles';
import { Logo, PokedexContainerImg, CampoDePesquisa, ButtonGo, ImgPokebola, DigitePokemon, } from './PesquisaPokemonWrapper';

export default function PesquisaPokemon(){
    const [pesquisando, setPesquisando] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);
    const [pesoPokemon, setPesoPokemon] = useState('');
    console.log(pesoPokemon)

 

    function buscarPokemon(){
        const req = axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisando.toLocaleLowerCase()}`)
        req.then(({data})=>{
            setPokemon(data);
            setLoading(false);
            setPesoPokemon(data.weight);
            console.log(setPesoPokemon)
        })

    }
    let pesoComVirgula = parseInt(pesoPokemon + '0');
    function separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{2})(?!\d)+)/g, ".");
      return str.join(".");
    }
    console.log(separator(pesoComVirgula));
    return (
      <>
        <Logo src={logo} alt="pokedexImg" />

        {loading ? (<>
            <PokedexContainerImg>
                <ImgPokebola src={pokebola} alt="pokebolaImg" />
            </PokedexContainerImg>
            <Paragrafo>Digite um nome ou numero do pokemon!</Paragrafo>
            </>
        ) : (
          <CardPokemon>
            <CardPokemonFoto>
              <NomeID>
                <p>{pokemon.name}</p>
                <span>#{pokemon.id}</span>
              </NomeID>
              <img src={pokemon.sprites.front_default} alt="imagemPokemon"/>
              <PesoAltura>
                <p>{separator(pesoComVirgula)}Kg</p>
                <p>Altura{pokemon.height}</p>
              </PesoAltura>
              
            </CardPokemonFoto>
            <CardPokemonDetalhes>
              {pokemon.types[0].type.name}
              HP{pokemon.stats[0].base_stat}
              Attack{pokemon.stats[1].base_stat}
              Defense{pokemon.stats[2].base_stat}
              Special-Attack{pokemon.stats[3].base_stat}
              Special-Defense{pokemon.stats[4].base_stat}
              Speed{pokemon.stats[5].base_stat}

          
            </CardPokemonDetalhes>
           
          </CardPokemon>
        )}
        <CampoDePesquisa>
          <DigitePokemon
            value={pesquisando}
            onChange={(e) => setPesquisando(e.currentTarget.value)}
          />
          <ButtonGo onClick={buscarPokemon}>GO!</ButtonGo>
        </CampoDePesquisa>
      </>
    );
}

const CardPokemon = styled.div`
  background-color: white;
  display:flex;
  height: 500px;
  grid-column: 4/10;
  grid-row: 3/3;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  
`;
const CardPokemonFoto = styled.div`
  width: 50%;
  border-radius: 10px 0px 0px 10px;
  display:flex;
  align-items:center;
  flex-direction:column;
  img{
    margin-top: 50px;
    position: absolute;
    width:300px;
    height:300px
  }
`;
const CardPokemonDetalhes = styled.div`
  background-color: yellow;
  width: 50%;
  border-radius: 0px 10px 10px 0px;
`;
const NomeID = styled.div`
  :root{
    --bug: #707e59;
    --dark: #21215a;
    --dragon: #62cad9;
    --electric: #eed277;
    --fairy: #ff7fb2;
    --fighting: #ef6239;
    --fire: #d44f5a;
    --flying: #94b2c7;
    --ghost: #460d6d;
    --grass:#70ca86;
    --ground: #6e491f;
    --ice: #d8f0fa;
    --normal: #fff0c0;
    --poison: rgb(94, 57, 116);
    --psychic: #cc207c;
    --rock: #8b3e22;
    --steel: #60756e;
    --water:#5d80d1;
  }
  background-color:#ef6239;
  display:flex;
  flex-direction:row;
  width:100%;
  height:550px;
  border-radius: 10px 0px 150px 150px;
  justify-content:space-between;
     p{
      color:white;
      text-transform: capitalize;
      padding:15px;
      font-size: 38px;
     }
     span{
      color:white;
      font-family: 'Archivo Black', sans-serif;
      padding:15px;
      font-size: 50px;
     }
`;
const PesoAltura = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height: 100%;
  align-items:center;
  justify-content:space-around;
  font-family: Poppins;
  font-weight:500;
`