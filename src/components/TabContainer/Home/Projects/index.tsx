import projectsData from "@/data/projects.data";
import getColsCount from "@/helpers/getColsCount";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "usehooks-ts";

import { ProjectDisplayCard } from "@/components/DisplayCard";

const Projects = () => {
  const [colsCount, setColsCount] = useState<number>(9);
  const { width } = useWindowSize();
  const { t } = useTranslation();

  useEffect(() => {
    setColsCount(getColsCount(width));
  }, [width]);

  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div className="flex z-10">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
          <p className="text-sm text-text-subdued">{t("projects.subTitle")}</p>
        </div>
      </div>

      <div
        className={`md:min-w-[372px] w-full gap-4 grid grid-cols-[repeat(var(--colsCount),minmax(0,1fr))]`}
        style={{ "--colsCount": colsCount } as CSSProperties}
      >
        {!!projectsData.length &&
          projectsData.slice(0, colsCount).map((project) => {
            return <ProjectDisplayCard key={project.id} {...project} />;
          })}
      </div>
    </section>
  );
};

export default Projects;
