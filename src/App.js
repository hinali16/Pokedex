import MenuDrop from './components/MenuDrops';
import logo from './img/logo.png';
import pokebola from './img/pokebola.png';
import styles from './components/BodyPokedex.module.css';

function App() {
  return (
      <div className={styles.pokedex_body}> 
        <MenuDrop />
        <img className={styles.logo} src={logo} alt="pokedexImg"/>
        
        <div className={styles.pokedex_img}>
            <img className={styles.conteudo} src={pokebola} alt="pokebolaImg"/>
        </div>
        <div className={styles.pokedex_pesquisa}>
            <p className={styles.poke_nome}>Digite um nome ou numero do pokemon!</p>
            <input className={styles.iinput}/>
            <button className={styles.bbutton}>GO!</button>
        </div>
        <div className={styles.pokedex_abilidades}>
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
        </div>
        <div className={styles.pokedex_footer}>
            <footer>Aplicação para fins estudantis &copy;</footer>
        </div>
      </div>
  )
}

export default App;