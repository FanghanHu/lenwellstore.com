import './App.css';
import "./dynamic-font-size.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about-us';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutUs/>} />
    </Routes>
  );
}

export default App;