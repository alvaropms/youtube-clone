import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    --primary-color: rgba(33, 33, 33, 0.98);
    --darken-color: hsl(0, 0%, 7%);
    --lighten-color: #202020;
    --white-text-color: #fff;
    --gray-text-color: #aaa;


    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }

  html{
    height: 100%;
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 
  'nav nav'
  'menu videos';
  grid-template-rows: 56px auto;
  grid-template-columns: 18vw 82vw;
  background-color: var(--primary-color);
  color: var(--white-text-color);

  @media (max-width: 800px){
      grid-template-columns: 0vw 100vw;
    }
`;
