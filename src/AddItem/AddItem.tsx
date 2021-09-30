import { useState, memo } from 'react';
import type { FC } from 'react';
import type { Element } from 'types'
import { NewElement, Input, Button } from './elements'

type AddItemProps = {
    setTodoList: any
    todoList: Array<Element>
}

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