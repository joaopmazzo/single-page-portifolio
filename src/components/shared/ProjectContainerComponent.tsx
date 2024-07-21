import ButtonComponent from "@components/shared/ButtonComponent";

interface ProjectContainerComponentProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  technologiesUsed?: Array<string>;
}

const ProjectContainerComponent = ({
  imgSrc,
  imgAlt,
  title,
  technologiesUsed,
}: ProjectContainerComponentProps) => {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={imgSrc}
        alt={imgAlt}
      />

      <div>
        <h2 className="text-headerM leading-headerM font-bold mb-2">{title}</h2>

        <div className="flex items-center gap-4">
          {technologiesUsed?.map((technology, index) => (
            <span
              key={index}
              className="text-bodyL leading-bodyL font-medium text-grey"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8 lg:hidden">
        <ButtonComponent text="VIEW PROJECT" />
        <ButtonComponent text="VIEW CODE" />
      </div>
    </div>
  );
};

export default ProjectContainerComponent;
