import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => task !== taskName);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='addTask'>
          <input type="text" onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task) => {
            return (
              <div>
                <h3>{task}</h3>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </div>

            )


          })}
        </div>
      </header>
    </div>
  );
}

export default App;
