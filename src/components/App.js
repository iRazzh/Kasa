import '../styles/App.css';
import Header from './Header'
import Footer from './Footer'
import HomeMain from './Homepage/HomeMain'
import AboutMain from './About/AboutMain'
import NoResultMain from './404/NoResultMain'
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="*" element={<NoResultMain />} />
      </Routes>
      <Footer />
    </>
  );
}

