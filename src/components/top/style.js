import styled from 'styled-components';



export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: To;


`;

export const Container = styled.div`
    display: flex;
    justify-content: ${props => `${props.Justify}`};
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 22px;
    align-items: center;
    width: ${props => `${props.Width}px`};
    
`;



export const Avatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: coral;
`;

export const SearchBar = styled.input`
    border: none;
    outline: none;
    font-size: 22px;
    align-text:center;
`;
export const Button = styled.button`
    width: 80px;
    height: 35px;
`;
export const Bar = styled.div`
    border: 2px solid gray;
    border-radius: 3px;
`;