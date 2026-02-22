import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return; // Last card doesn't get squashed

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(20px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });

            // Pinning the whole container
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                pin: true,
                scrub: true,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            id: "01",
            title: "The Core",
            desc: "Absolute performance. From indie gems to AAA on-chain playability.",
            Visual: () => (
                <svg className="w-48 h-48 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EDFFAD" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#EDFFAD" strokeWidth="2" />
                    <path d="M50 20 L50 80 M20 50 L80 50" stroke="#EDFFAD" strokeWidth="1" opacity="0.5" />
                    <rect x="45" y="45" width="10" height="10" fill="#EDFFAD" />
                </svg>
            )
        },
        {
            id: "02",
            title: "The Chain",
            desc: "Built-in hardware wallet to handle your digital sovereignty seamlessly.",
            Visual: () => (
                <div className="relative w-48 h-48 border border-[#EDFFAD]/30 bg-[#EDFFAD]/5 overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#EDFFAD 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.2 }}></div>
                    {/* Scanning laser line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#EDFFAD] shadow-[0_0_15px_#EDFFAD] animate-[scan_3s_ease-in-out_infinite]"
                        style={{ animation: 'scan 3s ease-in-out infinite alternate' }}></div>
                    <style>{`
            @keyframes scan {
              0% { transform: translateY(0); }
              100% { transform: translateY(190px); }
            }
          `}</style>
                </div>
            )
        },
        {
            id: "03",
            title: "The Lens",
            desc: "Integrated camera system designed for creation and verification.",
            Visual: () => (
                <svg className="w-48 h-48" viewBox="0 0 200 100">
                    <path
                        className="animate-[dash_2s_linear_infinite]"
                        d="M 0 50 L 50 50 L 70 20 L 90 80 L 110 50 L 200 50"
                        fill="none"
                        stroke="#EDFFAD"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                    />
                    <style>{`
            @keyframes dash {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
                </svg>
            )
        }
    ];

    return (
        <section ref={containerRef} id="protocol" className="relative h-screen w-full bg-background overflow-hidden">
            {steps.map((step, index) => (
                <div
                    key={step.id}
                    ref={el => cardsRef.current[index] = el}
                    className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 p-12 bg-background border-t border-black/5"
                    style={{ zIndex: index }}
                >
                    {/* Visual Left */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-64 h-64 md:w-96 md:h-96 bg-black rounded-[3rem] flex items-center justify-center p-8 shadow-2xl">
                            <step.Visual />
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="flex-1 max-w-xl text-textPrimary">
                        <span className="font-data text-sm tracking-widest text-[#2B2B2B]/50 mb-6 block">
                            PHASE // {step.id}
                        </span>
                        <h2 className="font-heading font-bold text-5xl md:text-7xl mb-6 tracking-tight">
                            {step.title}
                        </h2>
                        <p className="font-body text-xl md:text-2xl text-textPrimary/70 leading-relaxed font-light">
                            {step.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Protocol;
