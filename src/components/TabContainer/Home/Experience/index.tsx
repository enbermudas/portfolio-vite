import experienceData from "@/data/experience.data";
import type { ExperienceData } from "@/data/experience.data";
import { AppTabs } from "@/data/mainMenu.data";
import { Dispatch } from "@/store";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

interface ExperienceColumnProps {
  experience: ExperienceData;
}

interface ExperienceProps {
  changeTab: (newTab: AppTabs) => void;
}

const ExperienceColumn = ({ experience: { id, title, date, role, stack, link } }: ExperienceColumnProps) => {
  const { t } = useTranslation();

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="grid grid-cols-2 sm:grid-cols-[40px_2fr_2fr_minmax(120px,_1fr)] py-3 mb-6 sm:mb-2 rounded-lg hover:bg-background-elevatedBase transition ease-in-out"
    >
      <div className="justify-center items-center text-text-subdued invisible hidden sm:flex sm:visible">{id}</div>
      <div className="grid content-center">
        <div>{title}</div>
        <span className="text-text-subdued text-xs">{t(`jobs.${role}`)}</span>
      </div>
      <div className="text-text-subdued text-sm items-center invisible hidden sm:flex sm:visible">{stack}</div>
      <div className="items-center justify-end pr-4 invisible hidden sm:flex sm:visible">{t(`jobs.${date}`)}</div>
    </a>
  );
};

const Experience = ({ changeTab }: ExperienceProps) => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div className="flex">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{t("home.experience.title")}</h2>
          <p className="text-sm text-text-subdued">{t("home.experience.subtitle")}</p>
        </div>
      </div>

      <div>
        {!!experienceData.length &&
          experienceData.map((exp) => {
            return <ExperienceColumn experience={exp} key={exp.id} />;
          })}
      </div>
    </section>
  );
};

const mapDispatch = (dispatch: Dispatch) => ({
  changeTab: (newTab: AppTabs) => dispatch.tabs.changeTab(newTab),
});

export default connect(null, mapDispatch)(Experience);
