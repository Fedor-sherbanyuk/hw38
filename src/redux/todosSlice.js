import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://6143a98a9b2b2f00180396e1.mockapi.io/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
    const response = await axios.post(apiUrl, { text, isDone: false });
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});

export const toggleCompleted = createAsyncThunk('todos/toggleCompleted', async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    const updatedTodo = { ...response.data, isDone: !response.data.isDone };
    await axios.put(`${apiUrl}/${id}`, updatedTodo);
    return updatedTodo;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                return state.filter((todo) => todo.id !== action.payload);
            })
            .addCase(toggleCompleted.fulfilled, (state, action) => {
                const index = state.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    },
});

export default todosSlice.reducer;
