import noise from "@/assets/images/noise.svg";
import getColsCount from "@/helpers/getColsCount";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { useWindowSize } from "usehooks-ts";

import { ProjectDisplayCard } from "./DisplayCard";
import projectsData from "./projects.data";

const Projects = () => {
  const [colsCount, setColsCount] = useState<number>(9);
  const { width } = useWindowSize();

  useEffect(() => {
    setColsCount(getColsCount(width));
  }, [width]);

  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div className="flex z-10">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <p className="text-sm text-text-subdued">Un muestra de mis habilidades</p>
        </div>

        <div className="flex-none">
          <button className="text-text-subdued hover:underline underline-offset-4">Mostrar todos</button>
        </div>
      </div>

      <div
        className={`min-w-[372px] w-full gap-4 grid grid-cols-[repeat(var(--colsCount),minmax(0,1fr))]`}
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
