export default function DataError({ message = "Unable to fetch workout data right now." }) {
  return (
    <div className="border border-red-500/20 rounded-2xl p-8 sm:p-12 text-center bg-red-950/10 my-6">
      <p className="text-red-400 text-base font-medium">{message}</p>
      <p className="text-zinc-500 text-xs sm:text-sm mt-1">
        Please check your connection or try again later.
      </p>
    </div>
  );
}