import styles from './MenuDrop.module.css';
import { CgPokemon } from 'react-icons/cg';
import MinhaFoto from '../img/Desenvolvedora.jpg';
import FaceIcon from '../img/facebook.png';
import InstaIcon from '../img/instagram.png';
import LinkIcon from '../img/linkedin.png';
import GitIcon from '../img/github.png';


function MenuDrop (){
    return(
    <div className={styles.pokedex_body_menu}>
        <nav>
            <ul className={styles.menu}>
                    <li className={styles.menu_branco}>
                        <i className={styles.material_icons}><CgPokemon /></i>
                            <ul>
                                <li><div className={styles.fotoMenu}><img className={styles.devfoto} src={MinhaFoto} alt="devimg"/><p>Seja bem vindo Treinador</p><br/><p>Obrigado pela visita!</p></div></li>
                                <li><a href="https://www.facebook.com/Hinaliboldrim/"><img className={styles.icons}src={FaceIcon} alt="faceimg"/>FaceBook</a></li>
                                <li><a href="https://www.instagram.com/hinaliboldrim/"><img className={styles.icons} src={InstaIcon} alt="instaimg"/>Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/vanessa-carlos-277973206/"><img className={styles.icons} src={LinkIcon} alt="linkimg"/>Linkedin</a></li>
                                <li><a href="https://github.com/hinali16"><img className={styles.icons} src={GitIcon} alt="gitimg"/>Github</a></li>
                                <li><a href="https://pokeapi.co/">Link da API utilizada</a></li>
                            </ul>
                    </li>
            </ul>
        </nav>
    </div>
    )
}
export default MenuDrop 