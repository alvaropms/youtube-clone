import styled from 'styled-components';



export const Column = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: Vi;
    
    
    `;
    
export const Row = styled.div`
    display: flex;
    padding-top: 25px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 19px;
    align-items: center;
    width: ${props => `${props.Width}px`};
    justify-content: space-between;
`;
export const Info = styled.div`
    display: flex;
    padding-top: 25px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 19px;
    align-items: center;
    width: ${props => `${props.Width}px`};
`;

export const Big = styled.b`
    padding-left: 25px;
`;
export const Small = styled.div`
    padding-left: 25px;
    padding-bottom: 25px;
`;


export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: blue;
    margin-bottom: 50px;
`;