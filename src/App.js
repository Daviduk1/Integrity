import Navbar from './Components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Media from './Pages/Media';
import Resouces from './Pages/Resouces';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      

      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/media'element={<Media />} />
        <Route path='/resources'element={<Resouces />} />
        <Route path='/contact'element={<Contact />} />
        <Route path='/collection'element={<Collection />} />
        <Route path='/blog'element={<Blog />} />
        <Route path='/about'element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
