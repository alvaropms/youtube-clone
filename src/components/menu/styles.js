import styled from 'styled-components';

export const Container = styled.div`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    padding-left: 25px;
    padding-top: 20px;
    position: fixed;
    top:56px;
    left:0px;
    max-width: 18vw;

    hr{
        margin: 10px;
    }

    @media (max-width: 800px){
        display:none;
    }
    
`;

export const Item = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    

    div{
        margin-left: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
    }
`;

export const Title = styled.div`
    color: var(--gray-text-color);
    font-weight: bold;
`;