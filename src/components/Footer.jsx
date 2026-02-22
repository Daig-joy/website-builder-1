import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#111] text-[#E8E4DD] rounded-t-[4rem] px-6 py-20 md:px-16 z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

                {/* Brand & Status */}
                <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-8">
                    <div className="flex items-center gap-3">
                        <img src="https://playonjoy.com/_next/static/media/logo.092a38a9.svg" alt="JOY Shape" className="w-8 h-8 object-contain filter invert" />
                        <span className="font-heading font-bold text-2xl tracking-tight">Joy Tech</span>
                    </div>
                    <p className="font-body text-[#E8E4DD]/60 text-sm max-w-sm">
                        The Next-Gen Handheld Gaming Computer for a Multichain World ⛓️
                    </p>
                    <div className="flex items-center gap-3 mt-4 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
                        <span className="font-data text-[10px] text-[#E8E4DD]/80 uppercase tracking-widest">
                            System Operational
                        </span>
                    </div>
                </div>

                {/* Links 1 */}
                <div className="flex flex-col gap-4 font-body text-sm text-[#E8E4DD]/70">
                    <h4 className="font-heading text-white font-bold mb-2">Navigation</h4>
                    <a href="#features" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Features</a>
                    <a href="#philosophy" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Philosophy</a>
                    <a href="#protocol" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Protocol</a>
                </div>

                {/* Links 2 */}
                <div className="flex flex-col gap-4 font-body text-sm text-[#E8E4DD]/70">
                    <h4 className="font-heading text-white font-bold mb-2">Legal</h4>
                    <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Terms of Service</a>
                    <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Cookie Directives</a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center font-data text-xs text-[#E8E4DD]/40">
                &copy; {new Date().getFullYear()} Joy Tech. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
