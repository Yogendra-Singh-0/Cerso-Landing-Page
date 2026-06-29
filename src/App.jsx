import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Lightbulb,
  CheckCircle2,
  Clock,
  MonitorSmartphone,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

import cersoLogo from './assets/cerso_logo.png';
import heroBgImage from './assets/generated_hero_bg.png';
import navbarBgImage from './assets/navbar_bg.png';
import boxDesignBg from './assets/box_design_bg.png';
import boxAffordableBg from './assets/box_affordable_bg.png';
import boxFastBg from './assets/box_fast_bg.png';
import boxTailoredBg from './assets/box_tailored_bg.png';
import svcWebBg from './assets/svc_web_bg.png';
import svcSysBg from './assets/svc_sys_bg.png';
import svcSeoBg from './assets/svc_seo_bg.png';
import svcCustomBg from './assets/svc_custom_bg.png';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden">
        
        {/* Animated high-tech glowing bottom edge */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center relative">
              <img src={cersoLogo} alt="Cerso Logo" className="h-12 w-auto object-contain scale-[2.5] sm:scale-[3] origin-left relative z-10 drop-shadow-sm" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Process'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-slate-700 hover:text-brand-navy transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
              <a href="#contact" className="relative group overflow-hidden bg-brand-accent hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-brand-accent/20">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy p-2">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4 shadow-xl flex flex-col items-center">
              {['About', 'Services', 'Process'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-base font-medium text-slate-700 hover:text-brand-navy transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center mt-2 bg-brand-accent text-white px-6 py-3 rounded-full font-medium shadow-md shadow-brand-accent/20">
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function HeroBackground() {
  const panels = React.useMemo(() => [
    { size: 100, left: '10%', top: '20%', duration: 18, y: -80, rotate: 180, x: 30 },
    { size: 60, left: '80%', top: '15%', duration: 15, y: -60, rotate: -90, x: -20 },
    { size: 120, left: '15%', top: '70%', duration: 22, y: -100, rotate: 360, x: 40 },
    { size: 80, left: '75%', top: '65%', duration: 16, y: -70, rotate: 90, x: -30 },
    { size: 50, left: '50%', top: '30%', duration: 12, y: -50, rotate: -180, x: 20 },
    { size: 140, left: '45%', top: '80%', duration: 25, y: -120, rotate: 270, x: -40 },
  ], []);

  const meteors = React.useMemo(() => [
    { top: '15%', delay: 1, duration: 5, y: 50 },
    { top: '45%', delay: 3, duration: 6, y: -30 },
    { top: '75%', delay: 0, duration: 4, y: 20 },
    { top: '25%', delay: 5, duration: 7, y: 80 },
    { top: '85%', delay: 2, duration: 5, y: -50 },
    { top: '60%', delay: 6, duration: 6, y: 40 },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Tech-like Glass Panels */}
      {panels.map((p, i) => (
        <motion.div
          key={`panel-${i}`}
          className="absolute bg-white/10 border border-brand-accent/20 backdrop-blur-md rounded-3xl shadow-xl"
          style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
          animate={{
            y: [0, p.y, 0],
            rotate: [0, p.rotate, 0],
            x: [0, p.x, 0]
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Meteors / Data Streams */}
      {meteors.map((m, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]"
          style={{ top: m.top, left: '-20%' }}
          animate={{
            x: ['0vw', '120vw'],
            y: [0, m.y],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: m.duration, repeat: Infinity, ease: "linear", delay: m.delay }}
        />
      ))}
      
      {/* Grid Pulse Effect overlay */}
      <motion.div 
        className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ClickSpark({
  sparkColor = "#ffffff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1
}) {
  const [sparks, setSparks] = useState([]);

  React.useEffect(() => {
    const handleClick = (e) => {
      const newSpark = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev, newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, duration);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [duration]);

  return (
    <>
      {sparks.map((spark) => (
        <div key={spark.id} className="pointer-events-none fixed z-[100]" style={{ left: spark.x, top: spark.y }}>
          {Array.from({ length: sparkCount }).map((_, i) => {
            const angle = (i * 360) / sparkCount;
            const rad = (angle * Math.PI) / 180;
            // Calculate translation distance
            const distance = sparkRadius * 3;
            const tx = Math.cos(rad) * distance;
            const ty = Math.sin(rad) * distance;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor: sparkColor,
                  width: sparkSize,
                  height: sparkSize,
                  marginLeft: -(sparkSize / 2),
                  marginTop: -(sparkSize / 2),
                }}
                initial={{ scale: extraScale, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: 0,
                  x: tx,
                  y: ty,
                  opacity: 0,
                }}
                transition={{ duration: duration / 1000, ease: easing }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-brand-light">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230d1b2e\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-400/30 rounded-full blur-[120px]" />
      <motion.div animate={{ scale: [1, 1.5, 1], x: [0, -50, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[100px]" />
      <motion.div animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[130px]" />
    </div>
  );
}

function GlobalHoverEffect() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-500"
      style={{
        opacity: isHovering ? 1 : 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
      }}
    />
  );
}

function Hero() {
  return (
    <>
      <ClickSpark
        sparkColor="#3b82f6" // Changed to brand accent color so it's visible on white background
        sparkSize={6}
        sparkRadius={20}
        sparkCount={8}
        duration={600}
        easing="easeOut"
        extraScale={1}
      />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Generated Background Image */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10" />
          <img src={heroBgImage} alt="Hero Background" className="w-full h-full object-cover" />
        </motion.div>

        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto relative">
            {/* Soft glow behind text for extreme readability */}
            <div className="absolute inset-0 bg-white/60 blur-[80px] rounded-full pointer-events-none -z-10" />

            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 text-brand-accent text-sm font-semibold mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-accent"></span>
                Digital Solutions for Growing Businesses
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy tracking-tight mb-8 leading-[1.1] drop-shadow-md">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600">Digital Presence</span> With Cerso
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-800 font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                We build clean, affordable, and functional digital solutions tailored for small and growing businesses. Let's turn your vision into reality.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all shadow-xl shadow-brand-navy/20 hover:shadow-brand-navy/40 hover:-translate-y-1 w-full sm:w-auto">
                Let's Build Together
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="flex items-center justify-center gap-2 bg-white text-brand-navy border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all w-full sm:w-auto">
                Explore Services
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white/60 backdrop-blur-xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Cerso Team Collaboration"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-bold text-brand-navy mb-6 leading-tight">
              We empower small businesses with powerful digital tools.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Cerso, we believe that every growing business deserves a robust digital presence without breaking the bank. We are a dedicated web development company focused on delivering clean, affordable, and functional digital solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you need a stunning landing page, a complex management system, or a custom digital tool, we tailor our services specifically for small to medium enterprises looking to scale effectively.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-4xl font-extrabold text-brand-navy">100%</h4>
                <p className="text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-4xl font-extrabold text-brand-navy">24/7</h4>
                <p className="text-slate-500 font-medium">Dedicated Support</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "Fast, responsive, and beautiful websites built with modern technologies to capture your audience's attention.",
      bgImage: svcWebBg
    },
    {
      icon: <Database size={32} />,
      title: "Management Systems",
      description: "Custom dashboards and CMS solutions tailored to streamline your business operations and data management.",
      bgImage: svcSysBg
    },
    {
      icon: <Globe size={32} />,
      title: "Digital Presence",
      description: "SEO optimization, performance tuning, and digital strategies to ensure your business stands out online.",
      bgImage: svcSeoBg
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Custom Solutions",
      description: "Unique digital tools crafted specifically to solve your unique business challenges and drive growth.",
      bgImage: svcCustomBg
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-4xl font-bold text-brand-navy mb-6">Everything you need to grow online</h3>
            <p className="text-lg text-slate-600">
              We provide comprehensive digital services designed to elevate your brand and improve your operational efficiency.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-slate-100 group relative overflow-hidden z-10">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 transition-opacity duration-500">
                  <img src={service.bgImage} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                {/* Subtle overlay to ensure text readability without hiding the image */}
                <div className="absolute inset-0 bg-white/30 group-hover:bg-white/10 transition-all duration-500 z-0 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: <MonitorSmartphone size={24} />,
      title: "Clean & Modern Design",
      description: "We build aesthetically pleasing interfaces that provide an exceptional user experience.",
      bgImage: boxDesignBg
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Affordable Solutions",
      description: "Premium quality digital solutions priced competitively for small and growing businesses.",
      bgImage: boxAffordableBg
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      description: "We value your time. Our streamlined process ensures rapid development without compromising quality.",
      bgImage: boxFastBg
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Tailored for Small Businesses",
      description: "We understand the unique challenges you face and build tools that actually solve them.",
      bgImage: boxTailoredBg
    }
  ];

  return (
    <section className="py-24 bg-brand-navy/95 backdrop-blur-2xl text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Cerso</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Your trusted partner in digital transformation
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just build websites; we build digital foundations for your business to thrive on. Our commitment to quality and affordability sets us apart.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20">
              Start Your Project
              <ArrowRight size={20} />
            </a>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="left" className="h-full">
                <div className="glass-dark p-6 rounded-2xl h-full relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl">
                  
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen group-hover:opacity-50 transition-opacity duration-500">
                    <img src={reason.bgImage} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-navy/90 z-0 opacity-80 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-accent mb-4 backdrop-blur-sm border border-white/10">
                      {reason.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{reason.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Discuss", desc: "We listen to your needs, goals, and vision to understand exactly what you require." },
    { num: "02", title: "Design", desc: "We create intuitive, beautiful wireframes and UI designs tailored to your brand." },
    { num: "03", title: "Develop", desc: "Our engineers build your solution using modern, scalable, and secure technologies." },
    { num: "04", title: "Deliver", desc: "We launch your project, provide training, and offer ongoing support as you grow." }
  ];

  return (
    <section id="process" className="py-24 bg-white/60 backdrop-blur-xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Our Process</h2>
            <h3 className="text-4xl font-bold text-brand-navy mb-6">How we bring your vision to life</h3>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.15} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl mb-6 relative group hover:border-brand-accent transition-colors duration-300">
                <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-accent transition-colors">{step.num}</span>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h4>
              <p className="text-slate-500 leading-relaxed px-4">
                {step.description || step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/60 backdrop-blur-xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-12 lg:p-16 text-white flex flex-col justify-between">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
                <p className="text-slate-300 text-lg mb-12 max-w-md leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours with a free quote and consultation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-accent">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:thecerso@gmail.com" className="hover:text-brand-accent transition-colors">thecerso@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-accent">
                      <Globe size={20} />
                    </div>
                    <a href="https://cerso.netlify.app" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">cerso.netlify.app</a>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="p-12 lg:p-16 bg-white/5 backdrop-blur-lg border-l border-white/10">
              <FadeIn delay={0.2}>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Business Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      placeholder="Your Company LLC"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Service Needed</label>
                    <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all [&>option]:text-slate-800">
                      <option value="">Select a service...</option>
                      <option value="web">Web Development</option>
                      <option value="system">Management System</option>
                      <option value="digital">Digital Presence / SEO</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <button className="w-full bg-brand-accent hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 mt-4">
                    Get My Free Quote
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={cersoLogo} alt="Cerso Logo" className="h-10 w-auto object-contain scale-[2] sm:scale-[2.5] origin-left brightness-0 invert" />
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Clean, affordable, and functional digital solutions for small and growing businesses.
            </p>

          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Management Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Presence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <a href="mailto:thecerso@gmail.com" className="hover:text-white transition-colors">thecerso@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <a href="https://cerso.netlify.app" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">cerso.netlify.app</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cerso. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent/30 selection:text-brand-navy relative">
      <AnimatedBackground />
      <GlobalHoverEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
