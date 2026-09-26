'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function WorkoutFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search')?.toString() || ''
  );
  const [sortBy, setSortBy] = useState(
    searchParams.get('sortBy')?.toString() || 'default'
  );

  const updateParams = (newSearch, newSort) => {
    const params = new URLSearchParams(searchParams);

    if (newSearch) {
      params.set('search', newSearch);
    } else {
      params.delete('search');
    }

    if (newSort && newSort !== 'default') {
      params.set('sortBy', newSort);
    } else {
      params.delete('sortBy');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    updateParams(value, sortBy);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    updateParams(searchQuery, value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">

      <div className="relative w-full sm:w-80">
        <input
          type="text"
          placeholder="Search name, muscle, equipment..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full bg-[#121418] border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 outline-none focus:border-zinc-700 transition placeholder:text-zinc-500"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
          >
            ✕
          </button>
        )}
      </div>


      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <span className="text-xs sm:text-sm text-zinc-400 font-medium whitespace-nowrap">
          Sort By
        </span>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="bg-[#121418] border border-zinc-800 text-white text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2.5 outline-none cursor-pointer hover:border-zinc-700 transition w-full sm:w-auto"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}