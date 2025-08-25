"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <form
      action="/search"
      method="GET"
      className="flex items-center w-full max-w-lg rounded-md"
    >
      {/* Category Dropdown */}
      <Select name="category">
        <SelectTrigger className="flex h-9 cursor-pointer  text-black border border-r-gray-300 rounded-none bg-white">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="beauty">Beauty</SelectItem>
          <SelectItem value="jewellery">Jewellery</SelectItem>
          <SelectItem value="saree">Saree</SelectItem>
          <SelectItem value="fashion">Fashion</SelectItem>
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        name="q"
        type="search"
        placeholder="Search products..."
        className="flex-1 h-9 px-3 text-black border border-r-gray-300 rounded-none bg-white"
      />

      {/* Search Button */}
      <Button
        type="submit"
        className="h-9 px-4 bg-white border cursor-pointer hover:bg-white border-r-gray-300 rounded-none  flex items-center justify-center"
      >
        <SearchIcon className="w-5 h-5 text-black" />
      </Button>
    </form>
  );
};
