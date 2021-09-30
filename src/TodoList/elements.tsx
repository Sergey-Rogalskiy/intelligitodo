import styled from 'styled-components'

export const List = styled.ul`
    background-color: #fff;
    border-radius: 5px;
`;
export const ElementLi = styled.li`
    padding: 10px 20px;
    border-bottom: solid 3px #aaa;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;
export const Label = styled.label`
    display: inline;
    align-items: center;
    user-select: none;
    padding: 0 0 0 15px;
    &:hover {
        color: #aaa;
    }
    &::before {
        content: '';
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        background-color: #0000;
        border: solid 1px #000;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 20px;
    }
`;
export const CustomCheckbox = styled.input`
    width: 30px;    
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked+${Label}::before {
        background-color: #000;
        box-sizing: border-box;
    }
    &:checked+${Label} {
        color: #000;
        text-decoration: line-through;
    }
    &:checked:hover+${Label} {
        color: #aaa;
    }
    &+${Label}:hover::before {
        background-color: #aaa;
    }
    &:active+${Label}::before {
        background-color: #aaa;
    }
`;
export const Button = styled.button`
    background-color: #0000;
    border: none;
    border-radius: 50%;
    &:hover {
        color: #aaa;
    }
    &:active {
        font-weight: 900;
    }
`;