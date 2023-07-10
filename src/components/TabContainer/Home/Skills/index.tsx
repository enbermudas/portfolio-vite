import getColsCount from "@/helpers/getColsCount";
import { Dispatch } from "@/store";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useWindowSize } from "usehooks-ts";

import { SkillDisplayCard } from "@/components/DisplayCard";
import { AppTabs } from "@/components/MainMenu/mainMenu.data";

import skillsData from "./skills.data";

interface SkillProps {
  changeTab: (newTab: AppTabs) => void;
}

const Skills = ({ changeTab }: SkillProps) => {
  const { t } = useTranslation();
  const [colsCount, setColsCount] = useState<number>(9);
  const { width } = useWindowSize();

  useEffect(() => {
    setColsCount(getColsCount(width));
  }, [width]);

  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div className="flex z-10">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{t("home.skills.title")}</h2>
          <p className="text-sm text-text-subdued">{t("home.skills.subtitle")}</p>
        </div>

        <div className="flex-none">
          <button
            onClick={() => changeTab(AppTabs.SKILLS)}
            className="text-text-subdued hover:underline underline-offset-4"
          >
            {t("cta.showAll")}
          </button>
        </div>
      </div>

      <div
        className={`min-w-[372px] w-full gap-4 grid grid-cols-[repeat(var(--colsCount),minmax(0,1fr))]`}
        style={{ "--colsCount": colsCount } as CSSProperties}
      >
        {!!skillsData.length &&
          skillsData.slice(0, colsCount).map((skill) => {
            return <SkillDisplayCard key={skill.id} {...skill} />;
          })}
      </div>
    </section>
  );
};

const mapDispatch = (dispatch: Dispatch) => ({
  changeTab: (newTab: AppTabs) => dispatch.tabs.changeTab(newTab),
});

export default connect(null, mapDispatch)(Skills);
