import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

import { useProject } from "../contexts/ProjectContext";

const ProjectsPage = () => {
  const { projects, load, error } = useProject();
 const [displayProjects, setProjects] = useState([]);
  
  useEffect(()=>{

    setProjects(projects)
  }, [projects])


 

  function toggleCategory(e) {
    const category = e.target.value;

    if (category === "all") {
      setProjects(projects);
    } else {
      setProjects(projects.filter((item) => item.category === category));
    }
  }

  return (
    <>
      <Header />

      <div className="max-w-6xl m-auto md:px-1 px-5">
        <section className="flex justify-between items-center flex-wrap gap-5 py-5">
          <h1 className="py-5 text-2xl font-bold text-gray-600">
            {" "}
            🚀 Projects
          </h1>
          <div className="flex items-center gap-3">
            <label
              className="font-bold text-gray-600  focus:outline-none"
              htmlFor="Filter"
            >
              Filter:{" "}
            </label>
            <select
              onChange={toggleCategory}
              className="border border-gray-300 h-10 px-2"
              name=""
              id=""
            >
              <option value="all"> --Select a value ---</option>
              <option value="all">All</option>
              <option value="frontend">Frontend</option>
              <option value="fullstack">Fullstack</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </section>

        {load && <p className="text-green-500 py-5 text-center">Loading....</p>}
        {!load && error && (
          <h1 className="text-red-500 py-5 font-bold text-center">{error}</h1>
        )}

        {!load && !error && (
          <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-5  transition-all duration-150">
            {displayProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
