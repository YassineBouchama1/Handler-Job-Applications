import Footer from "@/components/Footer";
import Jobs from "@/components/Jobs";
import NavBar from "@/components/Navbar";
import Search from "@/components/Search";
import Value from "@/components/Value";
import JobCard from "@/features/JobListing/components/JobCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
}
