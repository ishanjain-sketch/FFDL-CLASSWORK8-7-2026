import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion";

import { ColorModeProvider } from "./context/ColorModeContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LionCursor from "./components/LionCursor";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEOServices from "./pages/SEOServices";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import PPCGoogleAds from "./pages/PPCGoogleAds";
import WebDesignDevelopment from "./pages/WebDesignDevelopment";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/services/seo" element={<PageTransition><SEOServices /></PageTransition>} />
        <Route path="/services/social-media-marketing" element={<PageTransition><SocialMediaMarketing /></PageTransition>} />
        <Route path="/services/ppc-google-ads" element={<PageTransition><PPCGoogleAds /></PageTransition>} />
        <Route path="/services/web-design-development" element={<PageTransition><WebDesignDevelopment /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ColorModeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <LionCursor />
          <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              <AnimatedRoutes />
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ColorModeProvider>
    </HelmetProvider>
  );
}

export default App;