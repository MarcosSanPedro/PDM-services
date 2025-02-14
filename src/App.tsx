import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;