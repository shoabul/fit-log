'use client';

import Link from 'next/link';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WorkoutContext } from '@/context/WorkoutContext';

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { myPlan = [], savedWorkouts = [] } = useContext(WorkoutContext) || {};
    
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleWorkoutsClick = (e) => {
        setMobileMenuOpen(false);

        if (isHomePage) {
            e.preventDefault();
            document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '/#library');
        }
    };

    return (
        <nav className="border-b border-zinc-800/80 bg-[#0b0c0f] text-zinc-300 sticky top-0 z-50">

            <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
                
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-1 text-zinc-400 hover:text-white md:hidden focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="FitLog Logo" width={24} height={24} className="object-contain" />
                        <span className="font-bold tracking-wider text-white uppercase text-base">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center justify-center gap-1">
                    <Link href="/#library" onClick={handleWorkoutsClick}>
                        <button
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                pathname === '/' || pathname.includes('#library')
                                    ? "bg-lime-500/10 text-lime-400 border border-lime-500/20"
                                    : "text-zinc-400 hover:text-zinc-200"
                            }`}
                        >
                            Workouts
                        </button>
                    </Link>

                    <Link href="/my-plan">
                        <button
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                pathname.startsWith('/my-plan')
                                    ? "bg-lime-500/10 text-lime-400 border border-lime-500/20"
                                    : "text-zinc-400 hover:text-zinc-200"
                            }`}
                        >
                            My Plan
                        </button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                    <Link href="/my-plan?tab=plan" className="flex items-center gap-1.5 text-xs hover:opacity-80 transition">
                        <span className="text-zinc-400 font-medium">Plan</span>
                        <span className="flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                            {myPlan.length}
                        </span>
                    </Link>

                    <Link href="/my-plan?tab=saved" className="flex items-center gap-1.5 text-xs hover:opacity-80 transition">
                        <span className="text-zinc-400 font-medium">Saved</span>
                        <span className="flex h-4 min-w-4 px-1 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[9px] text-zinc-300">
                            {savedWorkouts.length}
                        </span>
                    </Link>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-b border-zinc-800 bg-[#0b0c0f] px-4 py-3 space-y-2">
                    <Link href="/#library" onClick={handleWorkoutsClick} className="block">
                        <div className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            pathname === '/' ? "bg-lime-500/10 text-lime-400" : "text-zinc-400"
                        }`}>
                            Workouts
                        </div>
                    </Link>
                    <Link href="/my-plan" onClick={() => setMobileMenuOpen(false)} className="block">
                        <div className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            pathname.startsWith('/my-plan') ? "bg-lime-500/10 text-lime-400" : "text-zinc-400"
                        }`}>
                            My Plan
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;