import './App.css';
import { useEffect, useState } from 'react';
import ListHeader from './components/ListhHeader';
import ListItem from './components/ListItem';

//import ListItem from './components/ListItem';

const App = () => {
  //this is the correct email christian.marucco@testcom to see the task//
  const userEmail = 'christian.marucco@test.com'
  
  const [tasks, setTask] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTask(json)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => getData, [])
  console.log(tasks);

  //SORT BY DATE 

  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="App">
      
      <ListHeader listName={'holiday list'}></ListHeader>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task}></ListItem> )}
    </div>
  );
}

export default App;
