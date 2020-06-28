import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        
    }
`;
/*
to = top options
op = options
vi = videos

grid-template-columns: auto 80% auto;
    grid-template-rows: 46px auto;
padding: 0.5% 1.5%;
    height: 98%;
    width: 97%;
*/
export const Grid = styled.div`
    display: grid;
    padding: 16px 30px;
    grid-template-areas:
    'To To'  
    'Op Vi';
    
    

   
    

`;


