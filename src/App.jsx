import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <NewsSection />
      </div>
    </div>
  );
}

export default App;