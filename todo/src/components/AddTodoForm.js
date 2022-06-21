import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

function AddTodoForm({onAddTodo}) {
	const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddToDo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');
    };

	return (
			<form onSubmit={handleAddToDo}>
				<InputWithLabel
				todoTitle={todoTitle} isFocused
				handleTitleChange={handleTitleChange} label={"Title"}>
					<p>New to do:</p>
				</InputWithLabel>
				<button>Add</button>
			</form>
	);
};

AddTodoForm.propTypes = {
	onAddTodo: PropTypes.func
}

export default AddTodoForm;