"use client";
import { useSearch } from "@/context/SearchContext";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const { query, setQuery, fetchPosts } = useSearch();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    await fetchPosts(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    fetchPosts(newQuery);
  };

  return (
    <div className="relative flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className={`flex items-center justify-center  transition-all duration-500 ease-in-out ${
          isSearching ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search blogs..."
          value={query}
          onChange={handleInputChange}
          className="absolute top-16 right-8  md:relative md:top-0 lg:text-[18px] text-[16px] md:py-1 bg-transparent focus:outline-none focus:border-b md:px-5 lg:px-10 transition-opacity duration-300 ease-in-out"
        />
        <div className="md:flex hidden">
          {" "}
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute bottom-2 right-0 lg:right-3  "
            >
              <FaTimes className="w-4 h-4 opacity-30 " />
            </button>
          )}
        </div>
      </form>

      <button onClick={() => setIsSearching((prev) => !prev)} className="ml-2">
        <FaSearch className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
