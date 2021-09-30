import { useState, memo } from 'react';
import type { FC } from 'react';
import type { Element } from 'types'
import styled from 'styled-components'

type AddItemProps = {
    setTodoList: any
    todoList: Array<Element>
}
const NewElement = styled.div`
    white-space: nowrap;
    padding: 10px 20px;
    border: none;
    border-bottom: solid 3px #aaa;
    background-color: #fff;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 0px 00px 50px #0005;
`;
const Input = styled.input`
background-color: #0000;
border: none;
font-family: 'Courier New', Courier, monospace;
font-size: 0.9rem;
padding: 0 20px;
&:focus {
    outline: none;
}
`;
const Button = styled.button`
    margin: 0 0 0 10px;
    background-color: #0000;
    border: none;
    width: 30px;    
    height: 30px;
    font-size: 0.7rem;
    color: #000;
    padding: 0;
    line-height: 60%;
    &:hover {
        color: #aaa;
    }
`;

const AddItem:FC<AddItemProps> = (props) => {
    const {todoList, setTodoList} = props
    const [text, setText] = useState('')

    const addItem = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (text) {
            setTodoList(
                [
                    ...todoList,
                    {id: Date.now(), label: text, done: false}
                ]
            )
        }
        setText('')
    }
    return(
        <NewElement>
            <form onSubmit={(e) => {addItem(e)}}>
                <Button>&#10010;</Button>
                <Input 
                    type="text" 
                    placeholder='Add item' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </form>
        </NewElement>
    )
}

export default memo(AddItem)