import { Link } from "react-router";

const ProjectCard = ({project}) => {
    return <Link to={`/project/${project.id}`}>
     <div className="transition-transform duration-100 hover:transform-[scale(1.02)] mb-2 rounded-xl border border-gray-300 bg-gray-800"> 

          <img className="w-full h-40 object-cover rounded-t-xl" src={project.image} alt={project.title}/>
          <section className="px-5 py-3">
            <div>

            <h1 className="text-blue-400 font-semibold text-3xl py-3">{project.title}</h1>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <div className="flex justify-between items-center py-2">
            <small className="text-gray-400">{project.category}</small>
            <small className="text-gray-400">{project.date}</small>
          </div>
          </section>

    </div>
    </Link>
}
 
export default ProjectCard;