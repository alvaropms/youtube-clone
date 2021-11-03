import {Container, Channel, Infos, Title} from './styles';
import thumbnail from '../../assets/wxp.jpg'


function Thumb(){
    return (
        <>
        <Container direction='column'>
            <img src={thumbnail} width={250} height={150} alt={'Windows XP'}/>
            <Container marginTop='10' direction='row'>
                <Channel/>
                <Container direction='column' marginLeft='10'>
                    <Title>Este é um título deveras interessante e que descreve muito bem este vídeo</Title>
                    <Infos>
                        <div>Meu canal legal</div>
                        <div>28 mil visualizações5 •</div>
                        <div>há 3 semanas</div>
                    </Infos>
                </Container>
            </Container>
        </Container>
        </>
    );
}

export default Thumb;