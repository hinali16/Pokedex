import MenuDrop from './components/MenuDrop';
import styled from 'styled-components';
import PesquisaPokemon from './components/PesquisaPokemon';

export default function App() {
  return (
      <Container> 
        <MenuDrop />
        <PesquisaPokemon />
          {/* <div className={styles.pokedex_abilidades}>
          <div className={styles.pokedex_abilidades_box}>
              <div className={styles.pokedex_abilidades_box_conteudo}>
              </div>
          </div>
          </div>
          <div className={styles.pokedex_tipos}>
              <div className={styles.pokedex_tipos_box}>
                  <div className={styles.pokedex_tipos_box_conteudo}>
                  </div>
              </div>
          </div> */}
        <Footer>
            <footer>Aplicação para fins estudantis &copy;</footer>
        </Footer>
      </Container>
  )
}

const Container = styled.div`
    font-family: Poppins;
    background-color: rgb(179, 41, 41);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3%;
    grid-template-rows: 45px 25.33% 33.33% 23.33% 10%;
`

const Footer = styled.div`
    grid-column:5/9;
    grid-row: 5/5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
`