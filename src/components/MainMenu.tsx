import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { CSSProperties } from "react";

import Container from "./Container";
import { AppTabs } from "./mainMenu.data";
import mainMenuData from "./mainMenu.data";

interface MainMenuProps {
  activeTab: AppTabs;
  onMenuButtonClick: (newTab: AppTabs) => void;
}

const MainMenu = ({ activeTab, onMenuButtonClick }: MainMenuProps) => {
  return (
    <Container>
      <ul className="p-2 py-3 text-base font-bold">
        {!!mainMenuData.length &&
          mainMenuData.map(({ id, tab, title, icon }) => {
            return (
              <li className={classNames({ "mb-8": id !== mainMenuData.length })} key={id}>
                <button
                  className="flex items-center gap-5 text-[color:--text-color]"
                  style={{ "--text-color": activeTab === tab ? "#fff" : "#a7a7a7" } as CSSProperties}
                  onClick={() => onMenuButtonClick(tab)}
                >
                  <FontAwesomeIcon icon={icon} className="inline h-6" />
                  <span className="flex content-center items-center">{title}</span>
                </button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default MainMenu;
