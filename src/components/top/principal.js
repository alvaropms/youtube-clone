import React from 'react';
import {Row, SearchBar, Container, Avatar, Bar, Button} from './style';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {ThreeBars} from '@styled-icons/octicons/ThreeBars';
import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus';
import {Grid} from '@styled-icons/boxicons-solid/Grid';
import {Notifications} from '@styled-icons/ionicons-sharp/Notifications';
import {Search} from '@styled-icons/material/Search';


function Top() {
    return (
      <>
      <Row>
        <Container Width={130} Justify={'space-between'}>
            <ThreeBars size={20} color={'gray'}/>
            <div>
            <Youtube color={'red'} size={32}/>
            <b>YouTube</b>
            </div>
        </Container>


        <Container>
            <Bar>
              <SearchBar size={50}/>
              <Button><Search size={20}/></Button>
            </Bar>
        </Container>

        <Container Width={200} Justify={'space-between'}>
            <VideoPlus size={25} color={'gray'}/>
            <Grid size={20} color={'gray'}/>
            <Notifications size={20} color={'gray'}/>
            <Avatar/>
        </Container>
      </Row>
      </>
    );
  }
  
  export default Top;