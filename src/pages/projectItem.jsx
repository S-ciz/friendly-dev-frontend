import Header from "../components/Header";
import { useHref, Link } from "react-router";
import { useState, useEffect } from "react";
import { useProject } from "../contexts/ProjectContext";
import { FaArrowLeft } from "react-icons/fa6";

import {formatDate} from "../utils"

const ProjectItemPage = () => {
  const ref = useHref();
  const id = ref.split("/")[2];
  const { projects } = useProject();

  const [defaultProjects, setProject] = useState([]);

  useEffect(() => {
    setProject(projects);
  }, [projects]);

  const project = defaultProjects.filter((p) => p.id === id);

  if (project.length === 0) {
    return (
      <p className="text-center text-red-600"> Oops! Item was not found! </p>
    );
  }

  return (
    <div>
      <Header />
      <section className="max-w-6xl m-auto md:px-1 px-5">
        <Link className="py-5 px-5 text-blue-400 text-2xl flex items-center gap-3" to={"/project"}> <FaArrowLeft/> Back To Projects</Link>
        <div className=" grid grid-cols-1 md:px-1 px md:grid-cols-2 gap-5">

            <img src={project[0].image} alt="" />
            <div>
                <h1 className="text-blue-400 text-3xl font-bold">{project[0].title}</h1>
                <p className="py-2 font-bold text-gray-500">{formatDate(project[0].date)}</p>
                <p className="py-2 text-gray-400 mb-5 text-lg">{project[0].description}</p>
                <Link className="bg-blue-500 py-3 px-5 text-gray-300 rounded " to={project[0].url}>View Live Project</Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItemPage;
