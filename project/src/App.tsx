import { Menu, X, Instagram, Twitter, Dumbbell, ArrowRight, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white noise">
      {/* Navigation */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "py-4 bg-black/90 backdrop-blur-sm" : "py-6"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Dumbbell className="w-6 h-6" />
            <span className="text-distressed">GRIND™</span>
          </h1>
          <div className="flex items-center gap-6">
            <button className="hidden lg:block">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className={cn(
              "fixed inset-0 bg-black/95 lg:bg-transparent lg:static lg:flex",
              "transition-all duration-300 ease-in-out transform",
              isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
              <ul className="h-full flex flex-col lg:flex-row items-center justify-center gap-8 text-xl lg:text-base">
                <li><a href="#shop" className="hover-underline">Shop</a></li>
                <li><a href="#about" className="hover-underline">About</a></li>
                <li><a href="#collection" className="hover-underline">Collection</a></li>
                <li><a href="#contact" className="hover-underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-8 px-4">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter glitch" data-text="STAY HARD">STAY HARD</h2>
            <p className="text-xl md:text-2xl tracking-widest text-distressed">NO WEAKNESS. NO EXCUSES.</p>
            <button className="group px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-lg uppercase tracking-wider flex items-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 tracking-tight text-distressed">Latest Drop</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Combat Tank",
                price: "$45",
                image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80"
              },
              {
                name: "Power Shorts",
                price: "$55",
                image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80"
              },
              {
                name: "Beast Mode Hoodie",
                price: "$85",
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h4 className="text-lg font-medium text-distressed">{product.name}</h4>
                  <span className="text-lg font-mono">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="about" className="py-20 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-distressed glitch" data-text="THE GRIND NEVER STOPS">
              THE GRIND NEVER STOPS
            </h3>
            <p className="text-xl leading-relaxed font-mono">
              We don't make clothes for everyone. We make clothes for the relentless. 
              The ones who push past their limits. The ones who embrace the pain.
              This isn't just sportswear. This is armor for warriors.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-distressed">GRIND™</h4>
              <p className="text-gray-400">Built for the relentless.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GRIND™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;