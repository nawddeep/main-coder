import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          <PageTransition />
          <SEO />
          <Navbar />
          <main id="main-content">
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Process />
            <Testimonials />
            <Technologies />
            <CTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;