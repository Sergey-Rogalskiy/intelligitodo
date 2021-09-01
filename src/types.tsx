export type Element = {
    id: number
    label: string
    done: boolean
}

export type OptionsProps = {
    filter: string
    setFilter: any
    doneCount: number
}

export type TodoListProps = {
    filter: string
    setTodoList: any
    todoList: Array<Element>
}

export type AddItemProps = {
    setTodoList: any
    todoList: Array<Element>
}