import {Container, Item, Title} from './styles';
import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill';
import {Compass} from '@styled-icons/fa-regular/Compass';
import {Videos} from '@styled-icons/boxicons-solid/Videos';
import {Video} from '@styled-icons/entypo/Video';
import {History} from '@styled-icons/boxicons-regular/History';
import {FolderVideo} from '@styled-icons/entypo/FolderVideo';
import {Clock} from '@styled-icons/bootstrap/Clock';
import {Like} from '@styled-icons/boxicons-regular/Like';
import {ExpandMore} from '@styled-icons/material/ExpandMore';
import {PersonCircle} from '@styled-icons/bootstrap/PersonCircle';
import Divisor from '../divisor';

function Menu(){
    return(
        <>
        <Container>
            <Item>
                <HouseDoorFill size='20'/>
                <div>Início</div>
            </Item>
            <Item>
                <Compass size='20'/>
                <div>Explorar</div>
            </Item>
            <Item>
                <FolderVideo size='20'/>
                <div>Inscrições</div>
            </Item>
            <Divisor/>
            <Item>
                <Videos size='20'/>
                <div>Biblioteca</div>
            </Item>
            <Item>
                <History size='20'/>
                <div>Histórico</div>
            </Item>
            <Item>
                <Video size='20'/>
                <div>Seus vídeos</div>
            </Item>
            <Item>
                <Clock size='20'/>
                <div>Assistir mais tarde</div>
            </Item>
            <Item>
                <Like size='20'/>
                <div>Vídeos Marcados com gostei</div>
            </Item>
            <Item>
                <ExpandMore size='20'/>
                <div>Mostrar mais</div>
            </Item>
            <Divisor/>
            <Title>INSCRIÇÕES</Title>
            <Item>
                <PersonCircle size='20'/>
                <div>Canal Legal</div>
            </Item>
            <Item>
                <PersonCircle size='20'/>
                <div>Canal Legal</div>
            </Item>
            <Item>
                <PersonCircle size='20'/>
                <div>Canal Legal</div>
            </Item>
            <Item>
                <PersonCircle size='20'/>
                <div>Canal Legal</div>
            </Item>
        </Container>
        </>
    );
}

export default Menu;