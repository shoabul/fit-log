import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">

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
    </div>
  );
}