import styled from 'styled-components';



export const Column = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: Op;


`;

export const Row = styled.div`
    display: flex;
    padding-top: 25px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 19px;
    align-items: center;
    width: ${props => `${props.Width}px`};
`;

export const Txt = styled.div`
    padding-left:20px;
`;

export const Avatar = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: blue;
`;