// SearchContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { client } from "@/sanity/lib/client";
import { Post } from "../sanity/types";

// Define Search Context Types
interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  posts: Post[];
  fetchPosts: (query: string) => Promise<void>;
}

// Initialize Context with Default Values
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Custom Hook to Use Search Context
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (searchQuery: string) => {
    const sanityQuery = searchQuery
      ? `*[_type == "blog" && (title match "${searchQuery}*" || description match "${searchQuery}*")] {
          _id,
          title,
          description,
          slug,
          image,
          _createdAt
        }`
      : `*[_type == "blog"] {
          _id,
          title,
          description,
          slug,
          image,
          _createdAt
        }`;

    const results: Post[] = await client.fetch(sanityQuery);
    setPosts(results);
  };

  useEffect(() => {
    fetchPosts("");
  }, []);

  return (
    <SearchContext.Provider value={{ query, setQuery, posts, fetchPosts }}>
      {children}
    </SearchContext.Provider>
  );
};
