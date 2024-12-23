import { useState, useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function useSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [company, setCompany] = useState(searchParams.get("company") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      startTransition(() => {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (company) params.set("company", company);
        if (location) params.set("location", location);
        router.push(`/jobs?${params.toString()}`);
      });
    },
    [search, company, location, router, startTransition]
  );

  const clearAll = useCallback(() => {
    setSearch("");
    setCompany("");
    setLocation("");
    router.push("/jobs");
  }, [router]);

  return {
    search,
    setSearch,
    company,
    setCompany,
    location,
    setLocation,
    isPending,
    handleSubmit,
    clearAll,
  };
}
