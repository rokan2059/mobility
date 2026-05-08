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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 h-[72px] bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-10 flex items-center justify-between shadow-sm flex-shrink-0">
        {/* Logo area */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Mobility LED & Battery" className="h-12 w-auto object-contain rounded-sm" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center">
          <a 
            href={`tel:${hotline}`}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 hover:bg-blue-500 transition-colors text-sm font-bold uppercase tracking-wider border-b-2 border-blue-800 active:border-b-0 active:translate-y-[2px]"
          >
            <Phone size={16} className="fill-white" />
            <span className="hidden sm:inline">Call Us Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 relative overflow-hidden flex flex-col items-start gap-8 rounded-xl">
          <div className="max-w-xl relative z-10 w-full">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold mb-4 uppercase tracking-widest border border-blue-200 rounded-sm">Automotive Services</div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-slate-900 uppercase tracking-tight">
              We DELIVER <br className="hidden md:block"/> <span className="text-blue-600">Car Batteries</span> &amp; <span className="text-sky-500">LED Lights</span> at Your Doors.
            </h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Your trusted partner for automotive batteries and LED lighting in Cebu. Our battery experts are standing by to get you back on the road safely and quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a 
                href={`tel:${hotline}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 font-bold text-lg hover:bg-blue-500 transition-colors uppercase tracking-wider border-b-4 border-blue-800 active:border-b-0 active:translate-y-[4px] rounded-md"
              >
                <Phone size={20} className="stroke-[2.5px] fill-white" />
                Call Us Now
              </a>
              <a 
                href={facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-4 font-bold text-lg hover:bg-slate-50 transition-colors uppercase tracking-wider shadow-sm rounded-md"
              >
                <Facebook size={20} className="fill-blue-600 text-blue-600" />
                Message Us
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-wider text-slate-700">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-blue-600" /> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" /> Warranty Included
              </div>
              <div className="flex items-center gap-2">
                <Wrench size={18} className="text-blue-600" /> Expert Installs
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex absolute right-10 top-0 bottom-0 items-center justify-center">
            {/* Tech Graphic replacing image */}
            <div className="w-[320px] h-[220px] bg-slate-50 relative flex items-center justify-center border border-slate-200 rounded-xl">
               <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500 translate-x-1 -translate-y-1"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-sky-400 -translate-x-1 translate-y-1"></div>
               
               <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-white/0 to-white/0 pointer-events-none"></div>

               <div className="z-10 grid grid-cols-2 gap-4">
                  <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center relative group hover:border-blue-500 transition-colors rounded-sm shadow-sm"><Battery size={28} className="text-blue-600"/></div>
                  <div className="w-14 h-14 bg-blue-600 border border-blue-500 flex items-center justify-center text-white rounded-sm shadow-sm"><Truck size={28} className="fill-current stroke-[1.5]"/></div>
                  <div className="w-14 h-14 bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors rounded-sm shadow-sm"><Wrench size={28}/></div>
                  <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center relative group hover:border-sky-500 transition-colors rounded-sm shadow-sm"><Lightbulb size={28} className="text-sky-500"/></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Services & Products) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 flex flex-col lg:flex-row gap-8">
        
        {/* Services Section */}
        <div id="services" className="flex flex-col gap-4 flex-1">
          <div className="flex items-center mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-3 text-slate-900">
              <span className="w-3 h-3 bg-sky-500 inline-block"></span>
              Core Services
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-white p-6 border border-slate-200 border-l-2 hover:border-l-sky-500 flex flex-col justify-between transition-colors shadow-sm rounded-lg">
              <div>
                <div className="w-10 h-10 bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4 rounded">
                  <Truck size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-wide">Free Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stuck at home or on the road? We deliver car batteries directly to your location, saving time and the hassle of towing.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 border border-slate-200 border-l-2 hover:border-l-blue-600 flex flex-col justify-between transition-colors shadow-sm rounded-lg">
              <div>
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 rounded">
                  <Wrench size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-wide">Free Installation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our trained technicians don't just drop off the battery. We provide professional installation and alternating checks.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 border-l-2 hover:border-l-slate-900 flex flex-col justify-between sm:col-span-2 transition-colors shadow-sm rounded-lg">
              <div>
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center text-white mb-4 rounded">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-wide">LED Replacements</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Upgrade your visibility with our premium LED lighting installations. We replace dull, old halogen bulbs with bright, energy-efficient LEDs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="flex flex-col gap-4 flex-1">
          <div className="flex items-center mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-3 text-slate-900">
              <span className="w-3 h-3 bg-blue-600 inline-block"></span>
              Our Products
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
            {/* Battery Category */}
            <div className="bg-blue-600 text-white p-6 flex flex-col justify-between h-full relative overflow-hidden group shadow-sm rounded-lg">
              <Battery size={120} className="absolute -right-6 -bottom-6 text-blue-700/30 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="text-white text-xs font-black mb-4 uppercase tracking-widest flex justify-between items-center bg-blue-700 w-fit px-2 py-1 rounded-sm">
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
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center justify-between pt-3 border-t border-blue-500/50 group-hover:border-white/50 text-sm font-black uppercase tracking-widest text-white transition-colors">
                Inquire via Facebook
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* LED Category */}
            <div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full group rounded-lg">
              <div>
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:text-white transition-colors rounded">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-black text-xl mb-1 uppercase tracking-tight text-slate-900">LED Lighting</h3>
                <p className="text-[10px] text-sky-500 mb-4 font-bold uppercase tracking-widest">Premium Visibility</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-slate-600 font-medium">Auto LED Headlights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-slate-600 font-medium">Light Bars & Driving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <span className="text-xs text-slate-600 font-medium">Interior LED Bulbs</span>
                  </li>
                </ul>
              </div>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between pt-3 border-t border-slate-200 group text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors">
                View on Facebook
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
          <div className="inline-block px-3 py-1 bg-slate-800 text-sky-400 text-xs font-bold mb-6 uppercase tracking-widest border border-slate-700 rounded-sm">Emergency / Fast Response</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Need a Battery <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Right Now?</span></h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl font-medium">
            Don't stay stranded. Our battery experts are standing by. Get in touch with us via phone or our Facebook page.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-6 mb-16">
            <a 
              href={`tel:${hotline}`}
              className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-black hover:bg-blue-500 transition-colors text-base uppercase tracking-widest border-b-4 border-blue-800 active:border-b-0 active:translate-y-[4px] rounded-md"
            >
              <Phone size={20} className="mr-3 fill-current" />
              Call Us Now
            </a>
            <a 
              href={facebookUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-slate-800 border border-slate-700 text-white font-black hover:bg-slate-700 transition-colors text-base uppercase tracking-widest rounded-md"
            >
              <Facebook size={20} className="mr-3 fill-current" />
              Visit Facebook
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto border-t border-slate-800 pt-12">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0 rounded">
                  <MapPin size={24} />
               </div>
               <div>
                  <h4 className="font-black text-sm mb-1 uppercase tracking-wider text-white">Located in Cebu</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">Cebu City, Philippines.<br/>We deliver safely across the entire metro area.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 rounded">
                  <Clock size={24} />
               </div>
               <div>
                  <h4 className="font-black text-sm mb-1 uppercase tracking-wider text-white">Immediate Dispatch</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">Reach out on Facebook or our hotline for immediate assistance with your vehicle.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="h-[72px] bg-slate-950 border-t border-slate-900 px-4 sm:px-6 lg:px-10 flex items-center justify-between flex-shrink-0 text-slate-400">
        <p className="text-xs font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Mobility LED & Battery</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hidden sm:flex">
            <div className="w-2 h-2 bg-sky-400"></div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">On Standby</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckCircleIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mt-0.5 shrink-0 w-3 h-3 rounded-sm flex items-center justify-center ${dark ? 'text-white' : 'text-sky-400'}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

