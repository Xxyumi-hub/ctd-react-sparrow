import React from "react";
import style from "../TodoListItem.module.css";
import PropTypes from 'prop-types';

const TodoListItem = ({title, item, onRemoveTodo}) => {
    return (
        <>
            <li className={style.ListItem}>
                <p>{title}</p>
                <button 
                    type="button"
                    onClick = {() => onRemoveTodo(item.id)}
                    className={style.ButtonRemove}
                 >
                   remove 
                </button>
            </li>
        </>
    )
}
TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func,
    item: PropTypes.object,
}

export default TodoListItem;