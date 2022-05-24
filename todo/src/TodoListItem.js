import React from "react";

const TodoListItem = (props) => {
    return (
        <>
            <li>{props.todo.fields.title}</li>
            <button type="button" onClick={() => props.onRemoveTodo(props.item.id)}>Remove</button>
        </>
    )
}

export default TodoListItem;