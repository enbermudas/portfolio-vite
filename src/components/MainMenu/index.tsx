import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import Container from "../Container";
import { AppTabs } from "./mainMenu.data";
import mainMenuData from "./mainMenu.data";

interface MainMenuProps {
  activeTab: AppTabs;
  onMenuButtonClick: (newTab: AppTabs) => void;
}

const MainMenu = ({ activeTab, onMenuButtonClick }: MainMenuProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ul className="p-2 py-3 font-bold">
        {!!mainMenuData.length &&
          mainMenuData.map(({ id, tab, title, icon }) => {
            return (
              <li
                className={classNames("text-text-subdued", {
                  "mb-8": id !== mainMenuData.length,
                })}
                key={id}
              >
                <button
                  className="flex items-center gap-5 text-[color:--text-color] hover:underline underline-offset-4"
                  style={{ "--text-color": activeTab === tab ? "#fff" : "#a7a7a7" } as CSSProperties}
                  onClick={() => onMenuButtonClick(tab)}
                >
                  <FontAwesomeIcon icon={icon} className="inline h-6" />
                  <span className="flex content-center items-center">{t(title)}</span>
                </button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default MainMenu;
