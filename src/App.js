import Header from './components/Header/Header';
import SectionCreate from './components/sectionCreate/sectionCreate';

import './App.css';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from 'react-router-dom';

import Page2  from './components/pageGuide/Page2';
import PageMint from './components/pageMint/PageMint';
import PageMain from './components/pageMain/PageMain';

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Routes >
        <Route path="/" element={<PageMain />} />
        <Route path="/contract" element={<SectionCreate />} />
        <Route path="/create" element={<PageMint />} />
        <Route path="/guide" element={<Page2 />} />
      </Routes >
    </div>
    </Router>
  );
}







export default App;
