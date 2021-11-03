import { Area, Container, DivSearch, SearchInput, SearchButton, User } from "./styles";
import Logo from '../../assets/logo.png';
import {Menu} from '@styled-icons/boxicons-regular/Menu';
import {Search} from '@styled-icons/fluentui-system-filled/Search';
import {Notifications} from '@styled-icons/ionicons-outline/Notifications';
import {OfficeApps} from '@styled-icons/fluentui-system-filled/OfficeApps';
import {VideoPlus} from '@styled-icons/boxicons-regular/VideoPlus';


function Nav(){
    return (
        <>
        <Area>
            <Container>
                <Menu size='30'/>
                <img src={Logo} width={125} alt={'thumb'}/>
            </Container>

            <Container>
                <DivSearch>
                    <SearchInput placeholder={'Pesquisar'}/>
                    <SearchButton>
                        <Search size='25' color='white'/>
                    </SearchButton>
                </DivSearch>
            </Container>

            <Container separator='30'>
                <VideoPlus size='25'/>
                <OfficeApps size='25'/>
                <Notifications size='25'/>
                <User size='30'/>
            </Container>
        </Area>
        </>
    );
}

export default Nav;