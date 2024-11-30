import { Search } from "lucide-react";
import React from "react";

const SearchField = () => {
  return (
    <div className=" group  flex flex-1 mx-6 items-center rounded-full border-[1px] border-gray-300  focus-within:border-black">
      <input
        type="text"
        placeholder="What's on your mind today?"
        className="w-1/2 sm:flex-1 px-4 py-2 border-r-[1px] over rounded-l-full focus:outline-none focus:ring-0  group-focus-within:border-black "
      />
      <button className=" w-1/2 sm:w-auto flex items-center gap-1 px-4 py-2 text-gray-600">
        <Search />
        Search
      </button>
    </div>
  );
};

export default SearchField;
