import { ProjectData } from "../../data/works";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps extends ProjectData {}

const ProjectCard = ({
  thumbNailUrl,
  title,
  shortDescription,
  ...rest
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate(`/projects/${encodeURI(title)}`, {
      state: {
        ...rest,
        thumbNailUrl,
        title,
        shortDescription,
        from: "/projects",
      },
    });
  };

  return (
    <div className="text-white cursor-pointer" onClick={handleNavigate}>
      <div>
        <img src={thumbNailUrl} />
      </div>
      <h3 className="font-semibold text-xl my-3">{title}</h3>
      <p
        className="faded"
        style={{ fontSize: "clamp(0.75rem, 4.9vw ,1.1rem)" }}
      >
        {shortDescription}
      </p>
    </div>
  );
};

export default ProjectCard;
