import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper to split text by words for animation without Club GSAP SplitText
const AnimatedText = ({ text, className }) => {
    const words = text.split(' ');
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <span className="split-word inline-block">{word}</span>
                    {i !== words.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </span>
    );
};

const Philosophy = () => {
    const sectionRef = useRef(null);
    const parallaxBgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(parallaxBgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Word stagger animation
            gsap.from('.split-word', {
                y: "120%",
                opacity: 0,
                rotationZ: 3,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="philosophy"
            className="relative min-h-[90dvh] w-full bg-[#1A1A1A] flex items-center py-32 px-6 md:px-16 overflow-hidden"
        >
            {/* Background Image Parallax */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    ref={parallaxBgRef}
                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2669&auto=format&fit=crop"
                    alt="Organic Moss Texture"
                    className="w-full h-[130%] object-cover opacity-10 mix-blend-overlay origin-top transform -translate-y-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-[#111] opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">
                <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-[#E8E4DD]/50">
                    [ The Manifesto ]
                </h2>

                <div className="space-y-16">
                    <p className="font-body text-[#E8E4DD]/70 text-2xl md:text-4xl max-w-3xl leading-snug">
                        <AnimatedText text="Most next-gen gaming focuses on: closed ecosystems and fragmented value." />
                    </p>

                    <p className="font-drama italic font-medium text-[#E8E4DD] text-5xl md:text-8xl leading-[1.1] max-w-4xl">
                        <AnimatedText text="We focus on:" />
                        <br />
                        <span className="text-primary pr-4">
                            <AnimatedText text="Joy Ownership." />
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
