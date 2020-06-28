import React from 'react';
import {Grid} from './style';
import GlobalStyles from './style';
import Top from './components/top/principal';
import Options from './components/options/principal';
import Videos from './components/videos/principal';

function App() {
  return (
    <>
    <Grid>

      <Top/>
      <Options/>
      <Videos/>
      
    </Grid>    
    <GlobalStyles/>
    </>
  );
}

export default App;
