import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/home';
import Experience from './Pages/experience';
import Content from './Pages/content';
import Education from './Pages/education';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/experience' exact element={<Experience />} />
          <Route path='/content' exact element={<Content />} />
          <Route path='/education' exact element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
