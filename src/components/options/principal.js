import React from 'react';
import {Column} from './style';
import {Row} from './style';
import {Txt} from './style';
import {Avatar} from './style';
import {Home} from '@styled-icons/material/Home';
import {Fire} from '@styled-icons/fa-solid/Fire';
import {Videos} from '@styled-icons/boxicons-solid/Videos';
import {Play} from '@styled-icons/boxicons-regular/Play';
import {History} from '@styled-icons/material/History';
import {PlayVideo} from '@styled-icons/foundation/PlayVideo';
import {Clock} from '@styled-icons/octicons/Clock';
import {Like} from '@styled-icons/boxicons-solid/Like';
import {ChevronDown} from '@styled-icons/boxicons-solid/ChevronDown';

function Options() {
    return (
      <>
      <Column>
        <Row><Home size={23}/> <Txt>Início</Txt></Row>
        <Row><Fire size={23}/> <Txt>Em alta</Txt></Row>
        <Row><Videos size={23}/> <Txt>Inscrições</Txt></Row>
        <Row><Play size={23}/> <Txt>Biblioteca</Txt></Row>
        <Row><History size={23}/> <Txt>Histórico</Txt></Row>
        <Row><PlayVideo size={23}/> <Txt>Seus vídeos</Txt></Row>
        <Row><Clock size={23}/> <Txt>Assistir mais tarde</Txt></Row>
        <Row><Like size={23}/> <Txt>Vídeos marcados co...</Txt></Row>
        <Row><ChevronDown size={23}/> <Txt>Mostrar mais</Txt></Row>
        <Row>Inscrições</Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><Avatar/><Txt>PewDiePie</Txt></Row>
        <Row><ChevronDown size={23}/> <Txt>Mostrar mais</Txt></Row>

        

      </Column>
      </>
    );
  }
  
  export default Options;