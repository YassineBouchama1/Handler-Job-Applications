"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import useSearchForm from "../hooks/useSearchForm";
import Select from "@/components/ui/Select";

export default function SearchForm() {
  const {
    search,
    setSearch,
    company,
    setCompany,
    location,
    setLocation,
    isPending,
    handleSubmit,
    clearAll,
  } = useSearchForm();

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form onSubmit={handleSubmit}>
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Company..."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-500 disabled:opacity-50 flex items-center gap-2"
          >
            {isPending ? (
              <>
                <BiLoader className="h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <Select
            id="relevance"
            options={["Relevance", "Inclusive", "Starts With", "Contains"]}
          />
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <Select
            id="type"
            options={["Full-time", "Remote", "Contract", "Part-time"]}
          />
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <Select
            id="level"
            options={["Senior", "Beginner", "Intermediate", "Advocate"]}
          />
        </div>

        <span
          className="text-[#a1a1a1] cursor-pointer hover:text-[#808080]"
          onClick={clearAll}
        >
          Clear All
        </span>
      </div>
    </div>
  );
}
