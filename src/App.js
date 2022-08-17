import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

import './index.css';

const App = () => (
  <HashRouter>
    <NavBar />
    <Routes>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </HashRouter>
);

export default App;
