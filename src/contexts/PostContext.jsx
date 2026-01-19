import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resp = await fetch(`${baseUrl}/api/posts?populate=*`);

        if (!resp.ok) {
          throw new Error("Oops! An unexpected error occured.");
        }
        const data = await resp.json();

        const maped = data.data.map(item=>{

          return {
            id: item.documentId,
            title: item.title,
            excerpt: item.excerpt,
            slug: item.slug,
            date: item.date,
            image: item?.image?.url,
            content: item.content
          }
        })

        

        setPosts(maped);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoad(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, load, err }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

// eslint-disable-next-line react-refresh/only-export-components
export function usePosts() {
  return useContext(PostContext);
}
