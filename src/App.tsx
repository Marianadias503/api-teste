import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Albums } from './components/albums/Albums';
import { Post } from './components/post/Post';
import { Todos } from './components/todos/Todos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos/>} />
      </Routes>
    </Router>
  );
};

export default App;
