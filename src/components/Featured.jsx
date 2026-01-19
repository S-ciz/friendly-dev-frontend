import { useProject } from "../contexts/ProjectContext";
import ProjectCard from "./ProjectCard";
const Featured = () => {
  const { projects, load, error  } = useProject();

  const featuredProjects = projects.filter((p) => p.featured == true);

  if (featuredProjects.length == 0) {
    return null;
  }
  return (
    <>
      {load && <p className="text-green-700 py-3">Loading...</p>}
      {!load && error && <p className="text-center text-red-600 py-3">{error}</p>}

      {!load && !error && <div className="max-w-6xl m-auto md:px-1 px-5 py-5">
        <h1 className="font-bold py-4 text-3xl text-gray-600">
          ⭐ Featured Projects
        </h1>

        <section className="columns-1 md:columns-2  ">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </div>}
    </>
  );
};

export default Featured;
