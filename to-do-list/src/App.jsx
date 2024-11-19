import React, { useState } from 'react';
import Header from './Componenets/Header';
import ToDoList from './Componenets/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
      if (inputValue) {
          setTodos([...todos, { text: inputValue, completed: false }]);
          setInputValue('');
      }
  };

  const deleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
  };

  const toggleComplete = (index) => {
      const newTodos = todos.map((todo, i) => {
          if (i === index) {
              return { ...todo, completed: !todo.completed }; // Toggle completed status
          }
          return todo;
      });
      setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
      if (!newText) return; // Prevent empty edits
      const newTodos = todos.map((todo, i) => {
          if (i === index) {
              return { ...todo, text: newText };
          }
          return todo;
      });
      setTodos(newTodos);
  };

  return (
      <div>
          <Header inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
          <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
      </div>
  );
};

export default App;

