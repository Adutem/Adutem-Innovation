import React from "react";
import { ProjectData } from "../../data/works";

interface ProjectCardProps extends ProjectData {}

const ProjectCard = ({
  thumbNailUrl,
  title,
  shortDescription,
}: ProjectCardProps) => {
  return (
    <div className="text-white">
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
