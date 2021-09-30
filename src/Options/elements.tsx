import styled from 'styled-components'

export const OptionsStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px 0;
    button {
        background-color: #0000;
        width: 100%;
        border: none;
        font-size: 0.6rem;
        font-family: 'Courier New', Courier, monospace;
    }
    button:hover{
        color: #aaa;
    }
`;
export const Counter = styled.div`
    margin: 0 10px;
    padding: 0 20px;
    white-space: nowrap;
    font-size: 0.6rem;
    border-right: solid 2px #aaa;
`;

interface ButtonProps {
    filter: boolean
}
export const Button = styled.button<ButtonProps>`
        font-weight: ${({filter}) => filter ? '900' : '100'};
`;
