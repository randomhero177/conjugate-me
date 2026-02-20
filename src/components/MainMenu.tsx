"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PagesUrl } from "@/data/urls";
import { User } from "lucide-react";

const MainMenu = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div
      className={`main-menu flex justify-center items-center bg-cyan-600 px-4`}
    >
      <Link href={PagesUrl.home} className="hidden md:block p-4 me-auto">
        <img
          src="/CME_logo_book.png"
          alt="Logo"
          style={{ width: "60px", height: "auto" }}
        />
      </Link>

      {/*<Link href={PagesUrl.lang} className="p-4">
        Choose lang templ
      </Link>*/}
      <Link
        href={PagesUrl.verbs}
        className={`main-menu__item pe-4 lg:pe-12 font-bold text-amber-50 ${isActive(PagesUrl.verbs) ? "main-menu__item_active" : ""}`}
      >
        1. Select verbs
      </Link>
      <Link
        href={PagesUrl.tense}
        className={`main-menu__item pe-4 ms-4 lg:pe-12 lg:ms-12 font-bold text-amber-50 ${isActive(PagesUrl.tense) ? "main-menu__item_active" : ""}`}
      >
        2. Select tenses
      </Link>
      <Link
        href={PagesUrl.practiseSelected}
        className={`main-menu__item pe-4 ms-4 lg:pe-12 lg:ms-12 font-bold text-amber-50 ${isActive(PagesUrl.practiseSelected) ? "main-menu__item_active" : ""}`}
      >
        3. Practice
      </Link>
      <Link href={PagesUrl.register} className={`p-4 ms-auto pe-0`}>
        <span
          className={`main-menu__user ${isActive(PagesUrl.register) ? "main-menu__user_active" : ""}`}
        >
          <User size={32} color={"#fff"} />
        </span>
      </Link>
    </div>
  );
};

export default MainMenu;
