import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wallet, Camera, Gamepad2, Gift } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENT: Navbar ("The Floating Island") ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-16 w-[90%] md:w-auto
      ${scrolled
        ? 'bg-background/80 backdrop-blur-xl text-textPrimary border border-black/10 shadow-lg'
        : 'bg-transparent text-[#E8E4DD]'}`}>

      {/* Logo */}
      <div className="flex items-center gap-3">
        {/* Using the logo provided in JSON */}
        <img src="https://playonjoy.com/_next/static/media/logo.092a38a9.svg" alt="JOY Shape" className="w-8 h-8 object-contain" style={{ filter: scrolled ? 'invert(1)' : 'invert(0)' }} />
        <span className="font-heading font-bold text-xl tracking-tight hidden md:block">Joy Tech</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium tracking-wide">
        <a href="#features" className="hover:-translate-y-px transition-transform">Features</a>
        <a href="#philosophy" className="hover:-translate-y-px transition-transform">Philosophy</a>
        <a href="#protocol" className="hover:-translate-y-px transition-transform">Protocol</a>
      </div>

      {/* CTA */}
      <button className={`magnetic-btn px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors ${scrolled ? 'bg-primary text-black' : 'bg-primary text-black'}`}>
        Pre Order Now
      </button>
    </nav>
  );
};

// --- COMPONENT: Hero ("The Opening Shot") ---
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 overflow-hidden bg-black">
      {/* Background Image & Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Dark organic tech background"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Primary to black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        {/* Specific color tint over the black gradient to match requirement */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDFFAD]/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-[#E8E4DD] bottom-left-third">
        <h1 className="flex flex-col gap-2">
          <span className="hero-element font-heading font-bold text-2xl md:text-4xl text-primary/90 tracking-tight uppercase">
            The Next-Gen Handheld is the
          </span>
          <span className="hero-element font-drama italic font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            Multichain Future.
          </span>
        </h1>
        <p className="hero-element mt-8 max-w-lg text-lg text-white/70 font-body leading-relaxed text-balance">
          Play indie gems, retro classics, and AAA on-chain games all on one powerful handheld gaming computer built for a multichain world.
        </p>
        <div className="hero-element mt-10">
          <button className="magnetic-btn group bg-primary text-black px-8 py-4 rounded-[2rem] font-bold tracking-wide flex items-center gap-3 hover:bg-[#d8f08c] transition-colors">
            Pre Order Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
