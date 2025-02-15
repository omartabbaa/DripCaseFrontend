import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inloggen from './pages/inloggen' // Fixed casing
import Aanmelden from './pages/Aanmelden'
import Categorie from './pages/Categorie'
import Categorieën from './pages/Categorieën'
import Product from './pages/Product' // Fixed casing
import Winkelwagen from './pages/Winkelwagen'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inloggen" element={<Inloggen />} />
          <Route path="/aanmelden" element={<Aanmelden />} />
          <Route path="/categorie/:id" element={<Categorie />} />
          <Route path="/categorieën" element={<Categorieën />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/winkelwagen" element={<Winkelwagen />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
