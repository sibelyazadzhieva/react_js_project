import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<div>Catalog Page (Coming Soon)</div>} />
          <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />
          <Route path="/register" element={<div>Register Page (Coming Soon)</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App