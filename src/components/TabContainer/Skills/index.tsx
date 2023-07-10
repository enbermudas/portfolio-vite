import { useTranslation } from "react-i18next";

import { SkillDisplayCard } from "@/components/DisplayCard";
import skillsData from "@/components/TabContainer/Home/Skills/skills.data";
import { SkillLevel } from "@/components/TabContainer/Home/Skills/skills.data";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
        <div className="flex z-10">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">{t("skills.skills.title")}</h2>
            <p className="text-sm text-text-subdued">{t("skills.skills.subtitle")}</p>
          </div>

          <div className="flex-none">
            <button className="text-text-subdued hover:underline underline-offset-4">{t("cta.backHome")}</button>
          </div>
        </div>

        <div
          className={`min-w-[372px] w-full gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9`}
        >
          {!!skillsData.length &&
            skillsData.map((skill) => {
              return <SkillDisplayCard key={skill.id} {...skill} />;
            })}
        </div>
      </section>

      <section className="w-full min-h-fit flex flex-col p-6 relative">
        <div className="flex flex-row flex-wrap gap-6 w-full justify-center">
          {Object.keys(SkillLevel).map((key) => {
            return (
              <div className="flex gap-4 flex-col sm:basis-full lg:basis-1/4" key={key}>
                <div className="text-2xl">{t(`captions.titles.${SkillLevel[key as keyof typeof SkillLevel]}`)}</div>
                <div className="text-text-subdued text-sm">
                  {t(`captions.descriptions.${SkillLevel[key as keyof typeof SkillLevel]}`)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
