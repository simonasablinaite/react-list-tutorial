import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
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
                <h3>{task.taskName}</h3>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>

            )


          })}
        </div>
      </header>
    </div>
  );
}

export default App;
