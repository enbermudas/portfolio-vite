import experienceData from "./experience.data";
import type { ExperienceData } from "./experience.data";

interface ExperienceColumnProps {
  experience: ExperienceData;
}

const ExperienceColumn = ({ experience: { id, title, date, role, stack } }: ExperienceColumnProps) => {
  return (
    <div className="grid grid-cols-[40px_2fr_2fr_minmax(120px,_1fr)] py-3 mb-2 rounded-lg hover:bg-background-elevatedBase  cursor-pointer transition ease-in-out">
      <div className="flex justify-center items-center text-text-subdued">{id}</div>
      <div className="grid content-center">
        <div>{title}</div>
        <span className="text-text-subdued text-xs">{role}</span>
      </div>
      <div className="flex text-text-subdued text-sm items-center">{stack}</div>
      <div className="flex items-center justify-end pr-4">{date}</div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
      <div className="flex">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">Experiencia</h2>
          <p className="text-sm text-text-subdued">¿Qué hice durante todo este tiempo?</p>
        </div>

        <div className="flex-none">
          <button className="text-text-subdued hover:underline underline-offset-4">Mostrar todas</button>
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

export default Experience;