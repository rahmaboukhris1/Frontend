import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu.jsx";
import Listarticle from "./components/articles/Listarticle";
import Listcategorie from "./components/categories/Listcategorie.jsx";
import Listscategorie from "./components/Scategories/Listcategorie";  

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<Listarticle />} />
          <Route path="/categories" element={<Listcategorie />} />
          <Route path="/scategories" element={<Listscategorie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
