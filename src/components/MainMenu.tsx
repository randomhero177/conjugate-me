import Link from "next/link";
import { PagesUrl } from "@/data/urls";
import { CircleUserRound } from "lucide-react";

const MainMenu = () => {
  return (
    <div className="flex justify-center">
      <Link href={PagesUrl.home} className="p-4 me-auto">
        <img
          src="/CME_logo_book.png"
          alt="Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </Link>

      {/*<Link href={PagesUrl.lang} className="p-4">
        Choose lang templ
      </Link>*/}
      <Link href={PagesUrl.verbs} className="p-4">
        All verbs
      </Link>
      <Link href={PagesUrl.tense} className="p-4">
        Select tenses
      </Link>
      <Link href={PagesUrl.register} className="p-4 ms-auto">
        registration
        <CircleUserRound />
      </Link>
    </div>
  );
};

export default MainMenu;
