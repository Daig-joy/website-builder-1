import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Terminal, Gamepad2, Blocks, Trophy, Cpu, Eye, Wallet } from 'lucide-react';

const DiagnosticShuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'Indie Gems', icon: Gamepad2 },
        { id: 2, label: 'Retro Classics', icon: Cpu },
        { id: 3, label: 'AAA On-Chain', icon: Blocks }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex items-center justify-center">
            {cards.map((card, i) => {
                const isFront = i === 0;
                const isMiddle = i === 1;

                return (
                    <div
                        key={card.id}
                        className={`absolute w-full max-w-[200px] p-4 rounded-xl border border-black/5 bg-white/50 backdrop-blur-md shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-3`}
                        style={{
                            transform: `translateY(${i * 15}px) scale(${1 - i * 0.05})`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.2
                        }}
                    >
                        <div className="bg-primary/20 p-2 rounded-lg text-black">
                            <card.icon className="w-5 h-5" />
                        </div>
                        <span className="font-heading text-sm font-semibold">{card.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

const TelemetryTypewriter = () => {
    const fullText = "> VERIFIED.\n> JOY Ownership active.\n> Yield processing.\n> Endless rewards await...";
    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-48 w-full bg-[#111] rounded-xl p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#EDFFAD]"></div>
                <span className="font-data text-[10px] text-primary/80 uppercase tracking-widest">Live Telemetry Feed</span>
            </div>
            <div className="flex-1 font-data text-xs text-[#E8E4DD]/90 whitespace-pre-wrap font-medium leading-relaxed">
                {text}
                <span className="inline-block w-2 h-3 bg-primary ml-1 animate-pulse align-middle"></span>
            </div>
            <Terminal className="absolute bottom-4 right-4 w-12 h-12 text-white/5" />
        </div>
    );
};

const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const targetDayRef = useRef(null);
    const saveBtnRef = useRef(null);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Initial state
            gsap.set(cursorRef.current, { x: 20, y: 100, opacity: 0 });
            gsap.set(targetDayRef.current, { backgroundColor: 'transparent' });
            gsap.set(saveBtnRef.current, { scale: 1 });

            // Action sequence
            tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
                .to(cursorRef.current, {
                    x: 140, y: 20,
                    duration: 1,
                    ease: "power2.inOut"
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 }) // Click down
                .to(targetDayRef.current, { backgroundColor: '#EDFFAD', color: '#000', duration: 0.2 }, "<") // Highlight
                .to(cursorRef.current, { scale: 1, duration: 0.1 }) // Click up
                .to(cursorRef.current, {
                    x: 180, y: 120,
                    duration: 0.8,
                    ease: "power2.inOut",
                    delay: 0.2
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 }) // Click save
                .to(saveBtnRef.current, { scale: 0.95, duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(saveBtnRef.current, { scale: 1, duration: 0.1 }, "<")
                .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="h-48 w-full relative bg-[#F5F3EE] rounded-xl p-4 border border-black/5 flex flex-col items-center justify-center">
            {/* Grid */}
            <div className="flex gap-2 mb-6">
                {days.map((day, i) => (
                    <div
                        key={i}
                        ref={i === 4 ? targetDayRef : null}
                        className="w-7 h-7 rounded bg-white border border-black/10 flex items-center justify-center font-data text-[10px] font-bold text-textPrimary transition-colors"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <button ref={saveBtnRef} className="px-4 py-1.5 bg-black text-[#EDFFAD] font-heading font-bold text-xs rounded-full">
                Sign Transaction
            </button>

            {/* Animated Cursor */}
            <svg
                ref={cursorRef}
                className="absolute top-0 left-0 w-5 h-5 drop-shadow-md z-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="white"
                strokeWidth="1.5"
            >
                <path d="M4 4l5.5 17 3.5-7 7-3.5z" />
            </svg>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-32 px-6 md:px-16 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-textPrimary/50 mb-12">
                    [ Functional Artifacts ]
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/40 border border-white/80 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                        <DiagnosticShuffler />
                        <div className="mt-8">
                            <h3 className="font-heading font-bold text-xl mb-3">All-In-One Powerhouse</h3>
                            <p className="font-body text-textPrimary/70 text-sm leading-relaxed">
                                Play indie gems, retro classics, and AAA on-chain games all on one powerful handheld gaming computer.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/40 border border-white/80 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                        <TelemetryTypewriter />
                        <div className="mt-8">
                            <h3 className="font-heading font-bold text-xl mb-3">Endless Yield</h3>
                            <p className="font-body text-textPrimary/70 text-sm leading-relaxed">
                                Once a JOY Owner: Endless rewards await across the decentralized gaming ecosystem.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/40 border border-white/80 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                        <CursorProtocolScheduler />
                        <div className="mt-8">
                            <h3 className="font-heading font-bold text-xl mb-3">Hardware Wallet</h3>
                            <p className="font-body text-textPrimary/70 text-sm leading-relaxed">
                                Built-in hardware wallet & camera system to securely send, receive, and create value anywhere.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
