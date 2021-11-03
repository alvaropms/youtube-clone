import styled from 'styled-components';

export const Area = styled.div`
    grid-area: videos;
    flex-direction: column;
`;

export const ChipList = styled.div`
    white-space: nowrap;
    overflow-x: hidden;
    position: fixed;
    background-color: var(--primary-color);
    div{
        margin: 10px 5px;
    }
`;

export const Chip = styled.div`
    display: inline-block;
    padding: 0 12px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    border-radius: 25px;
    background-color: var(--gray-text-color);
`;

export const VideoList = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 35px;
    padding-left: 35px;
    background-color: var(--darken-color);
`;