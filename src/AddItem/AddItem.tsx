import { useState } from 'react';
import s from './index.module.css'

const AddItem = (props: any) => {
    const {todoList, setTodoList} = props
    const [text, setText] = useState('')

    const addItem = (e: any) => {
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

export default AddItem