import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import Apps from './components/Apps'; 
import Games from './components/Games';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomeSection />} />  {/* Default Route */}
            <Route path="/apps" element={<Apps />} />     {/* Apps Page */}
            <Route path="/games" element={<Games />} />     {/* Apps Page */}
            <Route path="/news" element={<News />} />     {/* Apps Page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
