import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
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
      <div className="App">
        <PageTransition />
        <SEO />
        <Navbar />
        <main>
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
    </HelmetProvider>
  );
}

export default App;