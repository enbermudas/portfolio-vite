import noise from "@/assets/images/noise.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { useWindowSize } from "usehooks-ts";

import skillsData from "./skills.data";
import type { Skill } from "./skills.data";

const SkillCard = ({ id, name, level, color, icon }: Skill) => {
  return (
    <div
      id={id}
      className={`rounded-lg bg-background-section h-72 p-4 flex flex-col items-center relative hover:bg-background-highlight hover:text-[color:--color] transition ease-in-out`}
      style={{ "--color": color } as CSSProperties}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-8xl mb-6 bg-background-elevatedBase rounded-full p-8 drop-shadow-xl w-[80px] h-[80px]"
      />
      <div className="font- text-2xl  self-start">{name}</div>
      <span className="text-text-subdued self-start font-light">{level}</span>
    </div>
  );
};

const Skills = () => {
  const [colsCount, setColsCount] = useState<number>(9);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 800) setColsCount(2);
    else if (width < 1100) setColsCount(3);
    else if (width < 1300) setColsCount(4);
    else if (width < 1600) setColsCount(5);
    else if (width < 1900) setColsCount(6);
    else if (width < 2200) setColsCount(7);
    else if (width < 2500) setColsCount(8);
    else setColsCount(9);
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
          <p className="text-sm text-text-subdued">¿Qué necesitas?</p>
        </div>

        <div className="flex-none">
          <button className="text-text-subdued hover:underline underline-offset-4">Mostrar todas</button>
        </div>
      </div>

      <div
        className={`min-w-[372px] w-full gap-6 grid grid-cols-[repeat(var(--colsCount),minmax(0,1fr))]`}
        style={{ "--colsCount": colsCount } as CSSProperties}
      >
        {!!skillsData.length &&
          skillsData.slice(0, colsCount).map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
      </div>
    </section>
  );
};

export default Skills;
