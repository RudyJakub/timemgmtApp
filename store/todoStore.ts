import { create } from "zustand"
import { Todo, TodoList } from "../types/todo"

interface TodoStoreState {
    todos: Todo[]
    addTodo: (todo: Todo) => void
    removeTodo: (todo: Todo) => void
}

const data = [
    {text: "todo", date: "21.03.2019", done: false},
    {text: "todo", date: "21.03.2019", done: false},
    {text: "todo", date: "21.03.2019", done: false},
    {text: "todo", date: "21.03.2019", done: false}
]

const compareTodos = (a: Todo, b: Todo): boolean => {
    if (a.date === b.date && a.done === b.done && a.text === b.text) {
        return true
    } else {
        return false
    }
}

const useTodoStore = create<TodoStoreState>()((set) => ({
    todos: [...data],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (todo) => set((state) => ({ todos: state.todos.filter((current: Todo) => !compareTodos(current, todo)) }))
}))

export default useTodoStore