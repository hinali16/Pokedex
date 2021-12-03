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

 

    function buscarPokemon(){
      if(pesquisando != ''){
      const req = axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisando.toLocaleLowerCase()}`)
      req.then(({data})=>{
            setPokemon(data);
            setLoading(false);
        });
      }
    }


    let pesoComVirgula = parseInt(pokemon?.weight + '0');
    function separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{2})(?!\d)+)/g, ".");
      return str.join(".");
    }
      const apertaButao = (e) => {
        if (e.key === 'Enter') {
          buscarPokemon();
        }
      };
    console.log(separator(pesoComVirgula));
    return (
      <>
        <Logo src={logo} alt="pokedexImg" />

        {loading ? (
          <>
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
              <PokemonFoto src={pokemon.sprites.front_default} alt="imagemPokemon" />
              <PesoAltura>
                <p>Peso: {separator(pesoComVirgula)}Kg <Linha /></p>
                <p>Altura: {pokemon.height} <Linha /></p>
              </PesoAltura>
            </CardPokemonFoto>
            <CardPokemonDetalhes>
              <TipoPokemon>
                {pokemon.types.map((x,index) => {   
                  return <Colunas><p>{x.type.name}</p></Colunas>})}
              </TipoPokemon>
              <ContainerColunas>
                <Colunas>
                  <span>
                    HP: {pokemon.stats[0].base_stat}
                  </span>
                  <Linha />
                  <span>
                    Attack: {pokemon.stats[1].base_stat}
                  </span>
                  <Linha />
                  <span>
                    Defense: {pokemon.stats[2].base_stat}
                  </span>
                  <Linha />
                </Colunas>
                <Colunas>
                  <span>
                    Sp.Atk: {pokemon.stats[3].base_stat}
                  </span>
                  <Linha />
                  <span>
                    Sp.Def: {pokemon.stats[4].base_stat}
                  </span>
                  <Linha />
                  <span>
                    Speed: {pokemon.stats[5].base_stat}
                  </span>
                  <Linha />
                </Colunas>
              </ContainerColunas>
            </CardPokemonDetalhes>
          </CardPokemon>
        )}
        <CampoDePesquisa>
          <DigitePokemon
            value={pesquisando}
            onChange={(e) => setPesquisando(e.currentTarget.value)}
            onKeyDown={apertaButao} 
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
  position:relative;
  width: 50%;
  border-radius: 10px 10px 10px 10px;
  display:flex;
  align-items:center;
  flex-direction:column;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
`;
const PokemonFoto = styled.img`
    position:relative;
    margin-top: 50px;
    position: absolute;
    width:300px;
    height:300px;
`;
const CardPokemonDetalhes = styled.div`
  display:flex;
  flex-direction:column;
  width: 50%;
  border-radius: 0px 10px 10px 0px;
`;

const NomeID = styled.div`  
  background-color:#c597c3;
  display:flex;
  flex-direction:row;
  width:100%;
  height:700px;
  border-radius: 10px 10px 800px 800px;
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
      font-size: 38px;
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

const ContainerColunas = styled.div`
  display:flex;
  flex-direction: row;
  width:100%;
  height:100% ;
  font-family: Poppins;
  font-weight:500;
`
const Colunas = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  width:50%;
  height:100% ;
  font-family: Poppins;
  font-weight:500;

     p{
      font-weight:700;
      font-family: 'Archivo Black', sans-serif;
      font-size: 20px;
     }
     
     span{
      padding:41.5px;
     }
  `
const TipoPokemon = styled.div`
  text-transform: capitalize;
  background-color:white;
  display:flex;
  margin:30px 0px 41.5px;
  flex-direction: row;
`
const Linha = styled.hr`
  color:#ffffff;
  background-color: #ffff;
  height: .5px;
  width: 150px;
  border-color: #ffff;
`
