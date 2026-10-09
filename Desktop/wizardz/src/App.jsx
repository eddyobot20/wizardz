
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from "./Navbar";
import Home from './Home'
import About from './About'
import Services from './Services'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <main className="site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App