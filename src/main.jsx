import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

import ProjectProvider from "./contexts/ProjectContext.jsx";
import PostProvider from "./contexts/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <ProjectProvider>
        <PostProvider>
          <BrowserRouter>
          <App />
           </BrowserRouter>
        </PostProvider> 
      </ProjectProvider>
   
  </StrictMode>
);
