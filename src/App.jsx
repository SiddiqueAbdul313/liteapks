import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import Apps from './components/Apps'; 

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<NewsSection />} />  {/* Default Route */}
            <Route path="/apps" element={<Apps />} />     {/* Apps Page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
