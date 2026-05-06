/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogArchive from './pages/BlogArchive';
import TravelGuides from './pages/TravelGuides';
import ImpactStories from './pages/ImpactStories';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/humanitarian" element={<BlogArchive />} />
            <Route path="/travel" element={<TravelGuides />} />
            <Route path="/team" element={<About />} />
            <Route path="/impact" element={<ImpactStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
