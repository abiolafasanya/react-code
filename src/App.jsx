import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Movie from './pages/Movie';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/:id' element={<Movie />} />
      <Route path='*' element={<Movies />} />
    </Routes>
  );
}

export default App;
