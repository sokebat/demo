"use client";

import { sections } from "@/data/footer-data";
import { fetchData } from "@/lib/fetch-data";
import { BriefcaseBusiness, ChevronDown, Layers3, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    const getCollection = async () => {
      const collectionQuery = `
        query GetCollectionList {
          collections {
            items {
              id
              name
              slug
            }
          }
        }
      `;

      try {
        const data = await fetchData(collectionQuery);
        setCollections(data?.collections?.items || []);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setCollections([]);
      }
    };

    getCollection();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Section: Logo & Collections */}
          <div className="flex items-center gap-x-6">
            {/* Logo */}
            <div className="relative flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://demo.hyperce.io/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <span className="ml-2 font-bold text-xl">Hyperce</span>
              </Link>
              <span className="text-xs absolute right-0 -bottom-3 text-center bg-slate-500 text-white px-1 rounded-full">
                demo
              </span>
            </div>

            <div
              className="relative"
              // onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-600 focus:outline-none"
              >
                <Layers3 />
                Collections
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 p-1 bg-white shadow-lg rounded-md z-50">
                  {collections?.map((collection, index) => (
                    <Link
                      // href={`/collections/${collection.slug}`}  
                      href="/"
                      key={index}
                      className="block px-4 py-2 rounded-md hover:bg-slate-200 text-black"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-1 mx-6 items-center rounded-full border-2 border-gray-300">
            <input
              type="text"
              placeholder="What's on your mind today?"
              className="flex-1 px-4 py-2 border-r-2 rounded-l-full focus:outline-none focus:ring-0"
            />
            <button className="flex items-center gap-1 px-4 py-2 text-gray-600">
              <Search />
              Search
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <BriefcaseBusiness />
            <span className="h-5 border-l-2"></span>
            <Link href="/sign-in" className="text-gray-600">
              Sign in
            </Link>
            <Link href="/sign-up" className="text-gray-600">
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex md:hidden mt-4">
          <input
            type="text"
            placeholder="What's on your mind today?"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}
