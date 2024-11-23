import Link from "next/link";
import { PagesUrl } from "@/data/urls";

const MainMenu = () => {
  return (
    <div className="flex justify-center">
      <Link href={PagesUrl.home} className="p-4">
        Home
      </Link>
      <Link href={PagesUrl.register} className="p-4">
        registration
      </Link>
      <Link href={PagesUrl.lang} className="p-4">
        Choose lang templ
      </Link>
      <Link href={PagesUrl.verbs} className="p-4">
        All verbs
      </Link>
    </div>
  );
};

export default MainMenu;
