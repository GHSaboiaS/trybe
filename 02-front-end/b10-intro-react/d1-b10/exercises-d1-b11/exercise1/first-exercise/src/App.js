import './App.css';
export default App;
const tasks = ['Buy BTC', 'Buy ETH', 'Buy LINK'];

const createTasks = (tasks) => {
  return (
    tasks.map((task) => <li>{task}</li>)
  )
}

function App() {
  return createTasks(tasks);
}

