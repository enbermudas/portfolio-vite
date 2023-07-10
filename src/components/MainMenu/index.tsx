import { AppTabs } from "@/data/mainMenu.data";
import mainMenuData from "@/data/mainMenu.data";
import { Dispatch, RootState } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import Container from "@/components/Container";

interface MainMenuProps {
  tabs: {
    currentTab: AppTabs;
  };
  changeTab: (newTab: AppTabs) => void;
}

const MainMenu = ({ tabs: { currentTab }, changeTab }: MainMenuProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ul className="py-3 font-bold">
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
                  style={{ "--text-color": currentTab === tab ? "#fff" : "#a7a7a7" } as CSSProperties}
                  onClick={() => changeTab(tab)}
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

const mapState = (state: RootState) => ({
  tabs: state.tabs,
});

const mapDispatch = (dispatch: Dispatch) => ({
  changeTab: (newTab: AppTabs) => dispatch.tabs.changeTab(newTab),
});

export default connect(mapState, mapDispatch)(MainMenu);
