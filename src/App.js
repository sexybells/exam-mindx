import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Tabs from './components/tabs';
import TodoListAll from './components/todoListAll';
import TodoActive from './components/todoActive';
import TodoCompleted from './components/todoCompleted';
import {Container} from 'react-bootstrap'
import TodoProvider from './components/todoProvider';
function App() {
  return (
    <div className="App">
      <TodoProvider>
      <Container>
        <div className='wraper'>
        <Tabs />
        <Routes>
          <Route path='/' exact element={<TodoListAll />} />
          <Route path='/active' element={<TodoActive />} />
          <Route path='/completed' element={<TodoCompleted />} />
        </Routes>
        </div>
        </Container>
        </TodoProvider>
    </div>
  );
}

export default App;
