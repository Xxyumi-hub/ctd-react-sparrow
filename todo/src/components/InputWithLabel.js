import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const InputWithLabel = (props) => {
    const inputRef = useRef();
    useEffect(() =>
        {inputRef.current.focus()}, []);
    return (
        <>
        <label htmlFor="todoTitle">{props.children}</label>
        <input id="todoTitle" type="text" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}/>
        </>
    )
}
InputWithLabel.propTypes = {
    children: PropTypes.node,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func

}


export default InputWithLabel;