import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      {/* Top Header Placeholder (if not already handled by a root layout) */}
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 text-sm">
        <div className="font-bold flex items-center gap-2 tracking-wide">
          <span>⚒</span> FITLOG
        </div>
        <nav className="hidden md:flex gap-6 text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Workouts</Link>
          <Link href="#" className="hover:text-white transition-colors">My Plan</Link>
        </nav>
        <div className="flex gap-4 text-xs">
          <span className="text-gray-400">Plan <span className="bg-[#a3e635] text-black font-semibold rounded-full px-2 py-0.5 ml-1">0</span></span>
          <span className="text-gray-400">Saved <span className="border border-gray-700 rounded-full px-2 py-0.5 ml-1">0</span></span>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex flex-col items-center justify-center text-center my-auto">
        <span className="text-[#a3e635] font-semibold text-sm tracking-wide mb-2">
          404
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          PAGE NOT FOUND
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-[#a3e635] text-black font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#8cee00] transition-colors"
        >
          Go Home
        </Link>
      </main>

      {/* Footer Placeholder */}
      <footer className="w-full max-w-7xl mx-auto pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="font-bold text-white flex items-center gap-2">
          <span>⚒</span> FITLOG
        </div>
        <div>
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </div>
      </footer>
    </div>
  );
}