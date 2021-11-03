import Nav from './components/nav';
import Menu from './components/menu';
import Videos from './components/videos'
import GlobalStyles, {Grid} from './styles';

function App() {
    return(
        <>
        <GlobalStyles/>
        <Grid>
            <Nav/>
            <Menu/>
            <Videos/>
        </Grid>
        </>
    );
}

export default App;
