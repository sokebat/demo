"use client";

import { fetchData } from "@/lib/fetch-data";
import { Collection } from "@/types/product-types";
import { BriefcaseBusiness, List, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/index";
import SearchField from "../atoms/search";

export const Navbar = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

        setCollections(data.collections.items || []);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setCollections([]);
      }
    };

    getCollection();
  }, []);

  return (
    <nav className="bg-white shadow-sm ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center   py-4">
          <div className="flex items-center gap-x-6">
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

            <NavigationMenu className="mt-2 hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <p className="flex items-center gap-1 text-gray-600 focus:outline-none">
                      <HiOutlineRectangleStack className=" h-5 w-5" />
                      Collections
                    </p>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-48 block z-50">
                    <p className="flex flex-col   w-48 p-1  ">
                      {collections.map((collection) => (
                        <Link
                          key={collection.id}
                          href={`/collections/${collection.slug}`}
                          className="block py-2 w-full text-start px-2 rounded-md hover:bg-slate-200 text-black"
                        >
                          {collection.name}
                        </Link>
                      ))}
                    </p>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="h-7 border-l-2 hidden lg:block bg-[#BABEC3]"></div>

          <div className="hidden lg:block flex-1 ">
            <SearchField />
          </div>

          <div className="flex items-center space-x-4">
            <div
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="cursor-pointer lg:hidden "
            >
              <SearchIcon />
            </div>
            <BriefcaseBusiness />
            <div className="h-7 border-l-2   bg-[#BABEC3]"></div>

            <Link href="/sign-in" className="hidden sm:block text-gray-600">
              Sign in
            </Link>
            <Link href="/sign-up" className="hidden sm:block text-gray-600">
              Sign up
            </Link>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <List className="h-7 mt-1" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-start">Collections</SheetTitle>
                    <SheetDescription>
                      <div className="p-1 mb-8 ">
                        {collections.map((collection) => (
                          <p
                            key={collection.id}
                            className="ml-3 font-semibold text-start text-gray-900 block  px-2 py-2"
                          >
                            <Link href={`/collections/${collection.slug}`}>
                              {collection.name}
                            </Link>
                          </p>
                        ))}
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      {isSearchOpen && <SearchField />}
    </nav>
  );
};
