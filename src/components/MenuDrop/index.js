import { CgPokemon } from 'react-icons/cg';
import MinhaFoto from '../../img/Desenvolvedora.jpg';
import FaceIcon from '../../img/facebook.png';
import InstaIcon from '../../img/instagram.png';
import LinkIcon from '../../img/linkedin.png';
import GitIcon from '../../img/github.png';
import { Paragrafo } from '../styles';
import { Container, Menu, MenuPokebola, IconPokebola, UlMenu, FotoDev, LinksRede, LinkAPI } from "./MenuDropWrapper"

export default function MenuDrop (){
    return(
    <Container>
            <Menu>
                <MenuPokebola>
                    <IconPokebola>
                        <CgPokemon />
                    </IconPokebola>
                        <UlMenu>
                            <FotoDev>
                                <div>
                                    <img src={MinhaFoto} alt="devimg"/>
                                    <Paragrafo>Seja bem vindo Treinador</Paragrafo>
                                    <Paragrafo>Obrigado pela visita!</Paragrafo>
                                </div>
                            </FotoDev>
                            <LinksRede>
                                <a href="https://www.facebook.com/Hinaliboldrim/" target="_blank" rel="noreferrer"><img src={FaceIcon} alt="faceimg"/>FaceBook</a>
                            </LinksRede>
                            <LinksRede>
                                <a href="https://www.instagram.com/hinaliboldrim/" target="_blank" rel="noreferrer"><img src={InstaIcon} alt="instaimg"/>Instagram</a>
                            </LinksRede>                                
                            <LinksRede>
                                <a href="https://www.linkedin.com/in/vanessa-carlos-277973206/" target="_blank" rel="noreferrer"><img src={LinkIcon} alt="linkimg"/>Linkedin</a>
                            </LinksRede>
                            <LinksRede>
                                <a href="https://github.com/hinali16" target="_blank" rel="noreferrer"><img src={GitIcon} alt="gitimg"/>Github</a>
                            </LinksRede>
                            <LinkAPI>
                                <a href="https://pokeapi.co/"  target="_blank" rel="noreferrer">Link da API utilizada</a>
                            </LinkAPI>
                        </UlMenu>
                </MenuPokebola>
            </Menu>
    </Container>
    )
}
