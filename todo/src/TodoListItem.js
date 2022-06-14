import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = (props) => {
    return (
        <>
            <li className={style.ListItem}>{props.todo.fields.title}</li>
            <button type="button" onClick={() => props.onRemoveTodo(props.item.id)}>Remove</button>
        </>
    )
}

export default TodoListItem;