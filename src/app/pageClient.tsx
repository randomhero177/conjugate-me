"use client";

import RandomVerbs from "@/app/practice-selected/RandomVerbs";
import { useRouter } from "next/navigation";
import { PagesUrl } from "@/data/urls";

export default function HomePageClient() {
  const router = useRouter();
  const goToPractice = () => {
    router.push(PagesUrl.practiseSelected);
  };
  return (
    <div className="">
      <div className="text-center pt-6 pb-6 font-bold">or</div>
      <RandomVerbs cb={goToPractice} />
    </div>
  );
}
