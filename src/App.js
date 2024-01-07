// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleCompleted } from './redux/todosSlice';
import { Form } from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        const todoText = e.target.elements.todoInput.value;
        dispatch(addTodo(todoText));
        e.target.reset();
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const toggleCompletedHandler = (id) => {
        dispatch(toggleCompleted(id));
    };

    return (
        <>
            <TodoList list={todoList} onClickHandler={toggleCompletedHandler} onDelete={handleDelete} />
            <Form submitHandler={submitHandler} />
        </>
    );
};

export default App;
