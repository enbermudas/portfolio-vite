import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import { ProjectData } from "./TabContainer/Home/Projects/projects.data";
import { SkillData, SkillLevel } from "./TabContainer/Home/Skills/skills.data";

enum DisplayType {
  PROJECT,
  SKILL,
}

interface DisplayCardProps {
  id: string;
  title: string;
  subTitle: string;
  type: DisplayType;
  link?: string;
  color?: string;
  icon?: IconDefinition;
  image?: string;
  level?: SkillLevel;
}

export const ProjectDisplayCard = ({ id, name, description, image, link }: ProjectData) => {
  return (
    <DisplayCard
      id={String(id)}
      title={name}
      subTitle={description}
      image={image}
      link={link}
      type={DisplayType.PROJECT}
    />
  );
};

export const SkillDisplayCard = ({ id, name, level, color, icon }: SkillData) => {
  const { t } = useTranslation();

  return (
    <DisplayCard
      id={String(id)}
      title={name}
      subTitle={t(level)}
      color={color}
      icon={icon}
      type={DisplayType.SKILL}
      level={level}
    />
  );
};

const DisplayCard = ({ id, title, subTitle, type, color, icon, image, link, level }: DisplayCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className={`rounded-lg bg-background-section h-72 p-4 flex flex-col items-center relative hover:bg-background-highlight hover:text-[color:--color] transition ease-in-out`}
      style={{ "--color": color } as CSSProperties}
    >
      {type === DisplayType.SKILL ? (
        <FontAwesomeIcon
          icon={icon as IconDefinition}
          className="text-8xl mb-6 bg-background-elevatedBase rounded-full p-8 drop-shadow-xl w-[80px] h-[80px]"
        />
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
          <img className="rounded-full drop-shadow-xl mb-6 p-2" src={image} alt={`project-${id}`} />
        </a>
      )}
      <div className="font-bold text-2xl self-start truncate w-full">{title}</div>
      <span
        className="text-text-subdued self-start font-light capitalize"
        style={{ color: level === SkillLevel.FAVORITE ? "#1ed760" : "#a7a7a7" }}
      >
        {t(`captions.titles.${subTitle}`)}
      </span>
    </div>
  );
};
