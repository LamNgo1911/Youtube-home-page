import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSidebarContext } from "../contexts/SidebarContext";

const PageHeader = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    isAboveMediumScreens && setShowSearchBar(false);
    console.log("checked");
  }, [isAboveMediumScreens]);

  return (
    <div className="flex items-center justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showSearchBar} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showSearchBar ? "flex" : "hidden md:flex"
        }`}
      >
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={`flex-shrink-0 ${!showSearchBar && "hidden"}`}
          onClick={() => setShowSearchBar(false)}
        >
          <ArrowLeft />
        </Button>

        <div className="flex flex-grow max-w-[600px] ">
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none rounded-l-full 
            border border-secondary-border shadow-inner shadow-secondary
            py-1 px-4 text-lg focus:border-blue-500"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0">
            <Search />
          </Button>
        </div>

        <Button size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div
        className={`md:gap-2 whitespace-nowrap flex-shrink-0 ${
          showSearchBar ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowSearchBar(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`items-center gap-4 flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="#home">
        <img src={logo} alt="youtube-symbol" className="h-6" />
      </a>
    </div>
  );
}
