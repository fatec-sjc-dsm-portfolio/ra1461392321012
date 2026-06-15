import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Professional from './pages/Professional'
import Interests from './pages/Interests'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/profissionais" element={<Professional />} />
        <Route path="/interesses" element={<Interests />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
