import { useState, memo } from 'react';
import type { FC } from 'react';
import type { Element } from 'types'
import s from './index.module.css'

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
        <div className={s.new_element}>
            <form onSubmit={(e) => {addItem(e)}}>
                <button>&#10010;</button>
                <input 
                    type="text" 
                    placeholder='Add item' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </form>
        </div>
    )
}

export default memo(AddItem)