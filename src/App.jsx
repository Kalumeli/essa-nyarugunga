import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Academic from "./pages/Academic"
import Admissions from "./pages/Admissions"
import ContactUs from "./pages/ContactUs"
import StudentLife from "./pages/StudentLife"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academic />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/students" element={<StudentLife />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
