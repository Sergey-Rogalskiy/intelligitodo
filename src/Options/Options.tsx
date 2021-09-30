import { FC } from 'react';
import styled from 'styled-components'

type OptionsProps = {
    filter: string
    setFilter: any
    doneCount: number
}
const OptionsStyle = styled.div`
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
const Counter = styled.div`
    margin: 0 10px;
    padding: 0 20px;
    white-space: nowrap;
    font-size: 0.6rem;
    border-right: solid 2px #aaa;
`;

interface ButtonProps {
    filter: boolean
}
const Button = styled.button<ButtonProps>`
        font-weight: ${({filter}) => filter ? '900' : '100'};
`;

export enum FilterOptions {
    All= "All",
    Current = "Current",
    Done = "Done"
}

const Options:FC<OptionsProps> = (props) => {
    const {filter, setFilter, doneCount} = props
    const buttons = FilterOptions

    return(
        <OptionsStyle>
            <Counter>{doneCount} left</Counter>
            {
                Object.keys(FilterOptions).map((item, index) => {
                    return(
                        <Button key={index} filter={filter === item ? true: false}
                        onClick={()=>{setFilter(item)}}>
                            {item}
                        </Button>
                    )
                })
            }
        </OptionsStyle>
    )
}

export default Options