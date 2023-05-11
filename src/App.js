import Header from './components/Header/Header';
import SectionCreate from './components/sectionCreate/sectionCreate';

import './App.css';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Routes >
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/contract" element={<SectionCreate />} />
        <Route path="/create" element={<h1>Главная</h1>} />
        <Route path="/guide" element={<h1>Главная</h1>} />
      </Routes >
    </div>
    </Router>
  );
}







export default App;
