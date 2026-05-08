import { 
  Battery, 
  Lightbulb, 
  Wrench, 
  Truck, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Facebook, 
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100075782114700";
  const hotline = "09099569963";

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 h-[72px] bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 lg:px-10 flex items-center justify-between shadow-sm flex-shrink-0">
        {/* Logo area */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Mobility LED & Battery" className="h-12 w-auto object-contain rounded-sm" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-zinc-400">
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center">
          <a 
            href={`tel:${hotline}`}
            className="flex items-center gap-2 bg-yellow-400 text-zinc-950 px-5 py-2 hover:bg-yellow-300 transition-colors text-sm font-bold uppercase tracking-wider border-b-2 border-yellow-600 active:border-b-0 active:translate-y-[2px]"
          >
            <Phone size={16} className="fill-zinc-950" />
            <span className="hidden sm:inline">Call Us Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-10 relative overflow-hidden flex flex-col items-start gap-8">
          <div className="max-w-xl relative z-10 w-full">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-yellow-400 text-xs font-bold mb-4 uppercase tracking-widest border border-yellow-400/20">Automotive Services</div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white uppercase tracking-tight">
              We DELIVER <br className="hidden md:block"/> <span className="text-yellow-400">Car Batteries</span> &amp; <span className="text-cyan-400">LED Lights</span> at Your Doors.
            </h1>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Your trusted partner for automotive batteries and LED lighting in Cebu. Our battery experts are standing by to get you back on the road safely and quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a 
                href={`tel:${hotline}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-zinc-950 px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-colors uppercase tracking-wider border-b-4 border-yellow-600 active:border-b-0 active:translate-y-[4px]"
              >
                <Phone size={20} className="stroke-[2.5px] fill-zinc-950" />
                Call Us Now
              </a>
              <a 
                href={facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white border border-zinc-700 px-8 py-4 font-bold text-lg hover:bg-zinc-700 transition-colors uppercase tracking-wider shadow-sm"
              >
                <Facebook size={20} className="fill-white" />
                Message Us
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-wider text-zinc-500">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-cyan-400" /> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-cyan-400" /> Warranty Included
              </div>
              <div className="flex items-center gap-2">
                <Wrench size={18} className="text-cyan-400" /> Expert Installs
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex absolute right-10 top-0 bottom-0 items-center justify-center">
            {/* Tech Graphic replacing image */}
            <div className="w-[320px] h-[220px] bg-zinc-950/50 relative flex items-center justify-center border border-zinc-800/50">
               <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-400 translate-x-1 -translate-y-1"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400 -translate-x-1 translate-y-1"></div>
               
               <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>

               <div className="z-10 grid grid-cols-2 gap-4">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group hover:border-yellow-400 transition-colors"><Battery size={28} className="text-yellow-400"/></div>
                  <div className="w-14 h-14 bg-yellow-400 border border-yellow-500 flex items-center justify-center text-zinc-950"><Truck size={28} className="fill-current stroke-[1.5]"/></div>
                  <div className="w-14 h-14 bg-zinc-800 flex items-center justify-center text-zinc-100 hover:bg-zinc-700 transition-colors"><Wrench size={28}/></div>
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group hover:border-cyan-400 transition-colors"><Lightbulb size={28} className="text-cyan-400"/></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Services & Products) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 flex flex-col lg:flex-row gap-8">
        
        {/* Services Section */}
        <div id="services" className="flex flex-col gap-4 flex-1">
          <div className="flex items-center mb-4 border-b border-zinc-800 pb-2">
            <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-3 text-zinc-100">
              <span className="w-3 h-3 bg-cyan-400 inline-block"></span>
              Core Services
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-zinc-900 p-6 border border-zinc-800 border-l-2 hover:border-l-cyan-400 flex flex-col justify-between transition-colors">
              <div>
                <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-4">
                  <Truck size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-zinc-100 uppercase tracking-wide">Free Delivery</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Stuck at home or on the road? We deliver car batteries directly to your location, saving time and the hassle of towing.
                </p>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 border border-zinc-800 border-l-2 hover:border-l-yellow-400 flex flex-col justify-between transition-colors">
              <div>
                <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 mb-4">
                  <Wrench size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-zinc-100 uppercase tracking-wide">Free Installation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our trained technicians don't just drop off the battery. We provide professional installation and alternating checks.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 border border-zinc-800 border-l-2 hover:border-l-white flex flex-col justify-between sm:col-span-2 transition-colors">
              <div>
                <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white mb-4">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-zinc-100 uppercase tracking-wide">LED Replacements</h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
                  Upgrade your visibility with our premium LED lighting installations. We replace dull, old halogen bulbs with bright, energy-efficient LEDs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="flex flex-col gap-4 flex-1">
          <div className="flex items-center mb-4 border-b border-zinc-800 pb-2">
            <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-3 text-zinc-100">
              <span className="w-3 h-3 bg-yellow-400 inline-block"></span>
              Our Products
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
            {/* Battery Category */}
            <div className="bg-yellow-400 text-zinc-950 p-6 flex flex-col justify-between h-full relative overflow-hidden group">
              <Battery size={120} className="absolute -right-6 -bottom-6 text-yellow-500/30 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="text-zinc-800 text-xs font-black mb-4 uppercase tracking-widest flex justify-between items-center bg-yellow-300 w-fit px-2 py-1">
                  PWR-CELL
                </div>
                <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Car Batteries</h3>
                <ul className="space-y-3 mb-6 font-bold text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon dark />
                    <span>Maintenance-Free Units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon dark />
                    <span>Deep Cycle / Heavy Duty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon dark />
                    <span>Motorcycle & E-Bike</span>
                  </li>
                </ul>
              </div>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center justify-between pt-3 border-t border-zinc-950/20 group-hover:border-zinc-950/50 text-sm font-black uppercase tracking-widest text-zinc-900 transition-colors">
                Inquire via Facebook
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* LED Category */}
            <div className="bg-zinc-900 p-6 border border-zinc-800 flex flex-col justify-between h-full group">
              <div>
                <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:text-white transition-colors">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-black text-xl mb-1 uppercase tracking-tight text-zinc-100">LED Lighting</h3>
                <p className="text-[10px] text-cyan-400 mb-4 font-bold uppercase tracking-widest">Premium Visibility</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-zinc-400 font-medium">Auto LED Headlights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-zinc-400 font-medium">Light Bars & Driving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-zinc-400 font-medium">Interior LED Bulbs</span>
                  </li>
                </ul>
              </div>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between pt-3 border-t border-zinc-800 group text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors">
                View on Facebook
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-100 flex flex-col items-center">
          <div className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-widest border border-yellow-400/20">Emergency / Fast Response</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Need a Battery <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Right Now?</span></h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl font-medium">
            Don't stay stranded. Our battery experts are standing by. Get in touch with us via phone or our Facebook page.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-6 mb-16">
            <a 
              href={`tel:${hotline}`}
              className="flex items-center justify-center px-8 py-4 bg-yellow-400 text-zinc-950 font-black hover:bg-yellow-300 transition-colors text-base uppercase tracking-widest border-b-4 border-yellow-600 active:border-b-0 active:translate-y-[4px]"
            >
              <Phone size={20} className="mr-3 fill-current" />
              Call Us Now
            </a>
            <a 
              href={facebookUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-black hover:bg-zinc-800 transition-colors text-base uppercase tracking-widest"
            >
              <Facebook size={20} className="mr-3 fill-current" />
              Visit Facebook
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto border-t border-zinc-800 pt-12">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0">
                  <MapPin size={24} />
               </div>
               <div>
                  <h4 className="font-black text-sm mb-1 uppercase tracking-wider text-zinc-100">Located in Cebu</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">Cebu City, Philippines.<br/>We deliver safely across the entire metro area.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock size={24} />
               </div>
               <div>
                  <h4 className="font-black text-sm mb-1 uppercase tracking-wider text-zinc-100">Immediate Dispatch</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">Reach out on Facebook or our hotline for immediate assistance with your vehicle.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="h-[72px] bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 lg:px-10 flex items-center justify-between flex-shrink-0 text-zinc-500">
        <p className="text-xs font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Mobility LED & Battery</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hidden sm:flex">
            <div className="w-2 h-2 bg-yellow-400"></div>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-black">On Standby</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckCircleIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mt-0.5 shrink-0 w-3 h-3 rounded-sm flex items-center justify-center ${dark ? 'text-zinc-900' : 'text-cyan-400'}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

