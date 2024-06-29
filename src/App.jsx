import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PersonalEthicalStatement from './pages/PersonalEthicalStatement';
import ThePerfectLie from './pages/ThePerfectLie';
import FeatureStory from './pages/FeatureStory';
import NewsRelease from './pages/NewsRelease';

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
                    <Route index element={<About />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="ethical-statement" element={<PersonalEthicalStatement />} />
                    <Route path="the-perfect-lie" element={<ThePerfectLie />} />
                    <Route path="feature-story" element={<FeatureStory />} />
                    <Route path="news-release" element={<NewsRelease />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;