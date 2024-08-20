'use client'
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleCreateNewClick = () => {
    router.push("/form");
  };
  return (
    <header className="flex flex-wrap items-center gap-6 px-6 w-full h-10 mt-11 mb-9 md:px-20">
      <h1 className="flex-1 text-3xl font-bold text-zinc-800 leading-10 min-w-[240px]">
        Training Certificates
      </h1>
      <div className="flex items-center gap-2 min-w-[240px]">
        <div className="w-80">
          <form className="flex items-center gap-2 w-full px-3 bg-white border border-zinc-300 rounded">
            
            <input
              type="search"
              id="search"
              className="flex-1 py-2 text-sm text-zinc-800 bg-transparent border-none"
              placeholder="Search"
            />
            <button type="submit" className="w-7 h-full">
              <img
                loading="lazy"
                src="/icons/search.svg"
                className="w-4 mr-3"
                alt="Search icon"
              />
            </button>
          </form>
        </div>
            <button
              onClick={handleCreateNewClick}
              className="flex items-center gap-1 px-4 py-2 text-sm text-white bg-blue-800 rounded shadow-sm"
            >
              <img
                loading="lazy"
                src="/icons/plus.svg"
                className="w-[15px]"
                alt=""
              />
              <span>Create new</span>
            </button>
      </div>
    </header>
  );
};

export default Header;
