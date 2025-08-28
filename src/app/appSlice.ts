import {
    AnyAction,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'

type Todo = {
    id: string
    title: string
    completed: boolean
}

interface TodoState {
    todos: Todo[]
    status: string | null
    error: string | null
}

const initialState: TodoState = {
    todos: [],
    status: null,
    error: null,
}

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

export const fetchTodos = createAsyncThunk<
    Todo[],
    undefined,
    { rejectValue: string }
>('todos/fetchTodos', async function (_, { rejectWithValue }) {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )

    if (!response.ok) {
        return rejectWithValue('Server Error!')
    }

    const data = await response.json()

    return data
})

export const addNewTodo = createAsyncThunk<
    Todo,
    string,
    { rejectValue: string }
>('todos/addNewTodo', async function (text, { rejectWithValue }) {
    const todo = {
        title: text,
        userId: 1,
        completed: false,
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })

    if (!response.ok) {
        return rejectWithValue('Server Error!')
    }

    const data: Todo = await response.json()
    return data
})

export const deleteTodo = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>('todos/deleteTodo', async function (id, { rejectWithValue }) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: 'DELETE',
        }
    )

    if (!response.ok) {
        return rejectWithValue('Server Error!')
    }

    return id
})

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action: PayloadAction<Todo>) {
            state.todos = state.todos.filter(
                (todo: Todo) => todo.id !== action.payload.id
            )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'resolved'
                state.todos = action.payload
            })
            .addCase(addNewTodo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(
                    (todo: Todo) => todo.id !== action.payload
                )
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = action.payload
            })
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
