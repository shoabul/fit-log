'use client';

import Link from 'next/link';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WorkoutContext } from '@/context/WorkoutContext';

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const { myPlan = [], savedWorkouts = [] } = useContext(WorkoutContext) || {};
    
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Pure JavaScript event handler (no TypeScript type annotations)
    const handleWorkoutsClick = (e) => {
        setActiveMenu("workouts");

        if (isHomePage) {
            e.preventDefault();
            document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '/#library');
        }
    };

    return (
        <nav className="h-14 border-b border-zinc-800 bg-[#0b0c0f] text-zinc-300">
            <div className="mx-auto grid h-full w-full grid-cols-3 items-center px-20">

                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.png" alt="FitLog Logo" width={24} height={24} className="" />
                        <span className="font-bold tracking-wider text-white uppercase text-base">
                            FITLOG
                        </span>
                    </div>
                </Link>

                <div className="flex items-center justify-center gap-1">
                    <Link href="/#library" onClick={handleWorkoutsClick}>
                        <button
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                activeMenu === "workouts"
                                    ? "bg-lime-500/10 text-lime-400"
                                    : "text-zinc-500 hover:text-zinc-300"
                            }`}
                        >
                            Workouts
                        </button>
                    </Link>

                    <Link href="/my-plan">
                        <button
                            onClick={() => setActiveMenu("plan")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                activeMenu === "plan"
                                    ? "bg-lime-500/10 text-lime-400"
                                    : "text-zinc-500 hover:text-zinc-300"
                            }`}
                        >
                            My Plan
                        </button>
                    </Link>
                </div>

                <div className="flex items-center justify-end gap-6">
                    <div className="flex items-center gap-2 text-xs">
                        <Link href="/my-plan?tab=plan">
                            <span className="text-zinc-400">Plan</span>
                        </Link>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                            {myPlan.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <Link href="/my-plan?tab=saved">
                            <span className="text-zinc-400">Saved</span>
                        </Link>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-[9px] text-zinc-400">
                            {savedWorkouts.length}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;