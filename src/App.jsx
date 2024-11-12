import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]); // Correctly use useState

  let list = ['almond', 'cashew', 'pistachio', 'kishmish'];

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) 
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error)); 
  }, []); 

  const filteredList = data.filter((todo) => todo.title.includes(value));

  return (
    <>
      <input type='text' onChange={handleChange} value={value} />
      <div>
        <h2>Todo List</h2>
        <ul>
          {filteredList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
