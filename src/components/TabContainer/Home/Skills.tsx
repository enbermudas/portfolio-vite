import noise from "@/assets/images/noise.svg";
import getColsCount from "@/helpers/getColsCount";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { useWindowSize } from "usehooks-ts";

import { SkillDisplayCard } from "./DisplayCard";
import skillsData from "./skills.data";

const Skills = () => {
  const [colsCount, setColsCount] = useState<number>(9);
  const { width } = useWindowSize();

  useEffect(() => {
    setColsCount(getColsCount(width));
  }, [width]);

  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div
        className="bg-background-profile z-0 w-full h-[160px] absolute left-0 top-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6) 0,#121212 100%),url(${noise})`,
        }}
      ></div>

      <div className="flex z-10">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">Conocimientos y aptitudes</h2>
          <p className="text-sm text-text-subdued">¿Qué puedo hacer?</p>
        </div>

        <div className="flex-none">
          <button className="text-text-subdued hover:underline underline-offset-4">Mostrar todas</button>
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

export default Skills;
