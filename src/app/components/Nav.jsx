'use client';

import Link from 'next/link';
import React, { useState } from 'react';


const Nav = () => {
    const [activeMenu, setActiveMenu] = useState("workouts");

    return (
        <nav className="h-14 border-b border-zinc-800 bg-[#0b0c0f] text-zinc-300">
            <div className="mx-auto grid h-full w-full grid-cols-3 items-center px-20">

                <Link href="/">
                    <div>
                        <h1 className="text-base font-bold tracking-wide text-white">
                            FITLOG
                        </h1>
                    </div>
                </Link>


                <div className="flex items-center justify-center gap-1">
                    <Link href="/">
                        <button
                            onClick={() => setActiveMenu("workouts")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${activeMenu === "workouts"
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
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${activeMenu === "plan"
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

                        <Link href="/">
                            <span className="text-zinc-400">
                                Plan
                            </span>
                        </Link>


                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                            0
                        </span>
                    </div>


                    <div className="flex items-center gap-2 text-xs">
                        <Link href="/">
                            <span className="text-zinc-400">
                                Saved
                            </span>
                        </Link>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-[9px] text-zinc-400">
                            0
                        </span>
                    </div>

                </div >
            </div >
        </nav >
    );
};

export default Nav;