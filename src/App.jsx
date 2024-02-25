import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function Layout() {
    return (
        <div className="layout-container">
            <div className='content-wrap'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;