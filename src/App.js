import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/home';
import Experience from './Pages/experience';
import Content from './Pages/content';
import About from './Pages/about';
import Testimonials from './Pages/testimonials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/content' element={<Content />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
