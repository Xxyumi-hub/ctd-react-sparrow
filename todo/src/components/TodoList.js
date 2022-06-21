import React from "react";
import PropTypes from "prop-types";

import TodoListItem from "./TodoListItem";

  function TodoList ({ todoList, onRemoveTodo }) {
	return (
		<div>

		<ul>
			{todoList.map((item) => {
				return <TodoListItem 
				key={item.id}
                        title={item.title}
                        item={item}
                        onRemoveTodo={onRemoveTodo} />;
				
				
			})}
		</ul>
		</div>
	);
}

TodoList.propTypes = {
	todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
}

export default TodoList;