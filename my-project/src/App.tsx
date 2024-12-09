import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import EbautUs from './pages/EbautUs';
import Team from './pages/Team';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Galery from './pages/Galey';
import Contact from './pages/Contact';
import BlogId from './pages/BlogId';
import Kompanies from './pages/Kompanies';
import KompaniesId from './pages/KompaniesId';
import Global from './pages/Global';
import Aply from './pages/Aply';
import Partners from './pages/Partners';
import Reviews from './pages/Rewiues';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/aply" element={<Aply />} />
                <Route path="/services/kompanies" element={<Kompanies />} />
                <Route
                    path="/services/kompanies/:id"
                    element={<KompaniesId />}
                />
                <Route path="/ourCompany/ebautUs" element={<EbautUs />} />
                <Route path="/ourCompany/team" element={<Team />} />
                <Route path="/ourCompany/media" element={<Media />} />
                <Route path="/ourCompany/blog" element={<Blog />} />
                <Route path="/ourCompany/blog/:id" element={<BlogId />} />
                <Route path="/ourCompany/faq" element={<Faq />} />
                <Route path="/ourCompany/galery" element={<Galery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/global" element={<Global />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
