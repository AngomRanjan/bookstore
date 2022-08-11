import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import NoPage from './components/NoPage';

import './index.css';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
