import classNames from "classnames";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
} from "@heroicons/react/24/outline";

import Container from "./Container";

import { AppTabs } from "../App";

interface MainMenuProps {
  activeTab: AppTabs;
  onMenuButtonClick: (newTab: AppTabs) => void;
}

const MainMenu = ({ activeTab, onMenuButtonClick }: MainMenuProps) => {
  const homeButtonClasses = classNames("flex items-center gap-4", {
    "text-text-base": activeTab === AppTabs.HOME,
    "text-text-subtle": activeTab !== AppTabs.HOME,
  });

  const searchButtonClasses = classNames("flex items-center gap-4", {
    "text-text-base": activeTab === AppTabs.SEARCH,
    "text-text-subtle": activeTab !== AppTabs.SEARCH,
  });

  return (
    <Container>
      <ul className="py-2">
        <li className="pb-4">
          <button className={homeButtonClasses} onClick={() => onMenuButtonClick(AppTabs.HOME)}>
            {activeTab === AppTabs.HOME ? (
              <HomeIconSolid className="inline h-6" />
            ) : (
              <HomeIconOutline className="inline h-6" />
            )}
            <span className="flex content-center items-center text-xl font-bold">Inicio</span>
          </button>
        </li>

        <li>
          <button className={searchButtonClasses} onClick={() => onMenuButtonClick(AppTabs.SEARCH)}>
            {activeTab === AppTabs.SEARCH ? (
              <MagnifyingGlassCircleIcon className="inline h-6" />
            ) : (
              <MagnifyingGlassIconOutline className="inline h-6" />
            )}
            <span className="flex content-center items-center text-xl font-bold">Buscar</span>
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default MainMenu;
