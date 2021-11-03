import styled from 'styled-components' ;
import {Person} from '@styled-icons/evaicons-solid/Person';

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => `${props.direction}`};
    max-width: 250px;

    
    margin-right: 15px;
    margin-bottom: 15px;


    font-size: 14px;

    margin-top: ${(props) => `${props.marginTop}px`};
    margin-left: ${(props) => `${props.marginLeft}px`};
`;

export const Channel = styled(Person)`
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    background-color: gray;
    border-radius: 50%;
`;

export const Infos = styled.div`

    color: var(--gray-text-color);
    margin-top: 5px;

    div{
        margin-right: 5px;
    }
`;

export const Title = styled.div`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;