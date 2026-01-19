import { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

const BaseUrl = import.meta.env.VITE_BASE_URL;

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [load, setLoadProject] = useState(true);
  const [error, setErrProject] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let response = await fetch(`${BaseUrl}/api/projects?populate=*`);

  

        if (!response.ok) {
          throw new Error("Oops! An unexpected error occured.");
        }
        const data = await response.json();
  

        const maped = data.data.map(item=> {
          return {
            title: item.title,
            id: item.documentId,
            description: item.description,
            category: item.category,
            featured: item.featured,
            date: item.date,
            image: item.image.url,

          }
        })
        setProjects(maped);
      } catch (err) {
        setErrProject(err.message);
      } finally {
        setLoadProject(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, load, error }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

// eslint-disable-next-line react-refresh/only-export-components
export function useProject() {
  return useContext(ProjectContext);
}
