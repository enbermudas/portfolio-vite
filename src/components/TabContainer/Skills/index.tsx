import { SkillDisplayCard } from "@/components/DisplayCard";
import skillsData, {
  SkillTexts,
  skillDescriptions,
  skillTranslations,
} from "@/components/TabContainer/Home/Skills/skills.data";

const Skills = () => {
  return (
    <>
      <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
        <div className="flex z-10">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">Conocimientos y aptitudes</h2>
            <p className="text-sm text-text-subdued">¿Qué puedo hacer?</p>
          </div>

          <div className="flex-none">
            <button className="text-text-subdued hover:underline underline-offset-4">Volver al inicio</button>
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

      <section className="w-full min-h-fit flex flex-col p-6 gap-6 relative">
        <div className="flex">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">Leyenda</h2>
            <p className="text-sm text-text-subdued">¿Favorito, proficiente... qué?</p>
          </div>
        </div>

        <div>
          {Object.keys(skillTranslations).map((key) => {
            return (
              <div>
                {skillTranslations[key]}:{skillDescriptions[key]}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
