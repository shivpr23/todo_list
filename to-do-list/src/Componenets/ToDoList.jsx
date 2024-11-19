
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDoItem
                    key={index}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
