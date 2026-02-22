import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative w-full py-32 px-6 md:px-16 bg-background overflow-hidden z-20">
            <div className="max-w-5xl mx-auto bg-[#1A1A1A] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                {/* Background Texture inside card */}
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#EDFFAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <span className="font-data text-sm tracking-widest text-primary uppercase">
            // Access Granted
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-6xl text-[#E8E4DD] tracking-tight">
                        Enter the Multichain.
                    </h2>
                    <p className="font-body text-[#E8E4DD]/70 text-lg md:text-xl max-w-2xl px-4 text-balance">
                        The next-generation handheld gaming computer is here. Secure your Joy Tech unit today and begin your journey.
                    </p>
                    <div className="mt-8">
                        <button className="magnetic-btn group bg-primary text-black px-10 py-5 rounded-[2rem] font-bold text-lg tracking-wide flex items-center gap-3 hover:bg-[#d8f08c] transition-colors shadow-[0_0_30px_rgba(237,255,173,0.3)]">
                            Pre Order Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
