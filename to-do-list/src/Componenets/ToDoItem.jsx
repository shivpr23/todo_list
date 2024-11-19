import React, { useState } from 'react';

const ToDoItem = ({ todo, index, deleteTodo, toggleComplete, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        editTodo(index, newText);
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            <div className="content">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                    style={{ marginRight: '10px' }}
                />
                {isEditing ? (
                    <>
                        <input
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button onClick={handleEdit}>Save</button>
                    </>
                ) : (
                    <span className="text" onClick={() => toggleComplete(index)}>
                        {todo.text}
                    </span>
                )}
            </div>
            {!isEditing && (
                <div className="button-group">
                    <button className="edit" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                    <button className="delete" onClick={() => deleteTodo(index)}>
                        Delete
                    </button>
                </div>
            )}
        </li>
    );
};

export default ToDoItem;
