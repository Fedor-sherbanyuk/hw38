import React from 'react';
import ListItem from './ListItem';

const TodoList = ({ list, onClickHandler, onDelete }) => {
    return (
        <ul>
            {list.map((todo) => (
                <ListItem key={todo.id} item={todo} onClickHandler={onClickHandler} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default TodoList;