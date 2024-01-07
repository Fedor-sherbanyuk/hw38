import React from 'react';

const ListItem = ({ item, onDelete, onClickHandler }) => {
    return (
        <li
            key={item.id}
            style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
            onClick={() => onClickHandler(item.id)}
        >
            {item.text}
            <button onClick={() => onDelete(item.id)}>Видалити</button>
        </li>
    );
};

export default ListItem;
