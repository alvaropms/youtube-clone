import React from 'react';
import {Column} from './style';
import {Row} from './style';
import {Big} from './style';
import {Small} from './style';
import {Avatar} from './style';
import {Info} from './style';
const Thumb = require('./thumb.jpg');

function Videos() {
    return (
      <>
      <Column>
        <Row> <h2>Recomendados</h2>   </Row>
        <Row>
            <Column>
              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>

              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>
            </Column>


            <Column>
              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>

              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>
            </Column>

            <Column>
              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>

              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>
            </Column>

            <Column>
              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>

              <img src={Thumb} width={385} height={216} alt={'thumb'}/>
                <Info>
                  <Avatar/>
                  <Column>
                    <Big>The Last of Us 2 - ENDING... - Part 8</Big>
                    <Small>PewDiePie <br/> 1,8 mi de visualizações • há 7 horas</Small>
                  </Column>
                </Info>
            </Column>
        </Row>
      </Column>


      </>
    );
  }
  
  export default Videos;