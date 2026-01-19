import {Routes, Route} from "react-router"


//pages
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFound from "./components/not-found";
import ProjectItemPage from "./pages/projectItem"
import BlogItemPage from "./pages/blogItem"

const App = () => {
  return <>
  <Routes>
    <Route path="/"  Component={HomePage}/>
    <Route path="/project"  Component={ProjectsPage}/>
    <Route path="/project/:id"  Component={ProjectItemPage}/>
    <Route path="/blog"  Component={BlogPage}/>
    <Route path="/blog/:id"  Component={BlogItemPage}/>
    <Route path="/about"  Component={AboutPage}/>
    <Route path="/contact"  Component={ContactPage}/>
    <Route path="*" Component={NotFound}/>
  </Routes>
  
  </>
}
 
export default App;