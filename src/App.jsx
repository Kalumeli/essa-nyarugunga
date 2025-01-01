import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "./components/Loading"
import usePageLoad from "./hooks/usePageLoad"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Academic from "./pages/Academic"
import Admissions from "./pages/Admissions"
import ContactUs from "./pages/ContactUs"
import StudentLife from "./pages/StudentLife"
import ErrorPage from "./pages/ErrorPage"

const RouteWrapper = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const isLoading = usePageLoad();
  const location = useLocation();

  useEffect(() => {
    setInitialLoading(true);
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (initialLoading || isLoading) ? <Loading /> : children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
        <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
        <Route path="/academics" element={<RouteWrapper><Academic /></RouteWrapper>} />
        <Route path="/admissions" element={<RouteWrapper><Admissions /></RouteWrapper>} />
        <Route path="/contact" element={<RouteWrapper><ContactUs /></RouteWrapper>} />
        <Route path="/students" element={<RouteWrapper><StudentLife /></RouteWrapper>} />
        <Route path="*" element={<RouteWrapper><ErrorPage /></RouteWrapper>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
