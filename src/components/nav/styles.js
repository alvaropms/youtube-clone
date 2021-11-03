import styled from 'styled-components';
import {PersonFill} from '@styled-icons/bootstrap/PersonFill';

export const Area = styled.div`
    grid-area: nav;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 25px;
    position: fixed;
    height: 56px;
    width: 100%;
    background-color: var(--primary-color);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${props => `${props.width}px`};

    svg{
        margin-right: ${ props => `${props.separator}px`};
    }

    :first-child{
        @media (max-width: 800px){
            display:none;
        }
    }

    :last-child{
        svg:nth-child(1){
            @media (max-width: 800px){
                display:none;
            }
        }
        svg:nth-child(2){
            @media (max-width: 800px){
                display:none;
            }
        }
        svg:nth-child(3){
            @media (max-width: 800px){
                display:none;
            }
        }
    }
`;

export const DivSearch = styled.div`
    background-color: var(--darken-color);
    border: 0.2px solid #aaa;
    padding-left: 6px;
    height: 40px;
    width: 35vw;
    border-radius: 3px;
    display: flex;
    align-items: center;

    @media (max-width: 800px){
        width: 70vw;
    }
`;

export const SearchInput = styled.input`
    font-size: 1rem;
    background-color: var(--darken-color);
    color: var(--white-text-color);
    border: none;
    padding: 0px;
    margin: 0px;
    height: auto;
    width: 100%;
    outline: none;
`;

export const SearchButton = styled.button`
    border: none;
    height: 100%;
    width: 15%;
    padding: 6px;
    background-color: var(--gray-text-color);
`;

export const User = styled(PersonFill)`
    background-color: gray;
    color: white;
    border-radius: 50%;
    padding: 5px;
    margin-right: 0px !important;
`;
