import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inloggen from './pages/inloggen' 
import Aanmelden from './pages/Aanmelden'
import Categorie from './pages/Categorie'
import Categorieën from './pages/Categorieën'
import Product from './pages/product'
import Winkelwagen from './pages/Winkelwagen'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar'
import ProductToevoegen from './pages/productToevoegen'
import CategorieToevoegen from './pages/categorieToevoegen'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
        <Route path="/categorieën" element={<Categorieën />} />
          <Route path="/categorie/:id" element={<Categorie />} />
          <Route path="/product-toevoegen" element={<ProductToevoegen />} />
          <Route path="/categorie-toevoegen" element={<CategorieToevoegen />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/winkelwagen" element={<Winkelwagen />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inloggen" element={<Inloggen />} />
          <Route path="/aanmelden" element={<Aanmelden />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
