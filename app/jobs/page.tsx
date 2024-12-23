import NavBar from "@/components/Navbar";
import Value from "@/components/Value";
import Footer from "@/components/Footer";
import { getJobs } from "@/actions/jobs";
import Jobs from "@/features/JobListing/components/JobList";
import { Suspense } from "react";
import SearchForm from "@/features/SearchForm/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string; company?: string };
}) {



 

  const jobs = await getJobs(searchParams.search, searchParams.company);




  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <SearchForm />
      <Suspense fallback={<div>Loading...</div>}>
        <Jobs jobs={jobs} />
      </Suspense>

      <Value />
      <Footer />
    </div>
  );
}
