import React from "react";

const TodoListItem = ({item, onRemoveTodo}) => {
    return (
        <>
            <li>{item.title}</li>
            <button type="button" onClick={() => onRemoveTodo(item.id)}>Remove</button>
        </>
    )
}

export default TodoListItem;