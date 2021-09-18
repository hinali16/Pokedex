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
                                <li><div className={styles.fotoMenu}><img className={styles.devfoto} src={MinhaFoto}/><p>Seja bem vindo Treinador</p><br/><p>Obrigado pela visita!</p></div></li>
                                <li><a href="https://www.facebook.com/Hinaliboldrim/"><img className={styles.icons}src={FaceIcon}/>FaceBook</a></li>
                                <li><a href="https://www.instagram.com/hinaliboldrim/"><img className={styles.icons} src={InstaIcon}/>Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/vanessa-carlos-277973206/"><img className={styles.icons} src={LinkIcon}/>Linkedin</a></li>
                                <li><a href="https://github.com/hinali16"><img className={styles.icons} src={GitIcon}/>Github</a></li>
                                <li><a href="https://pokeapi.co/">Link da API utilizada</a></li>
                            </ul>
                    </li>
            </ul>
        </nav>
    </div>
    )
}
export default MenuDrop 