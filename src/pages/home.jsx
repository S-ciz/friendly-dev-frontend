import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Featured from "../components/Featured";
import About from "../components/About";
import LatestPosts from "../components/LatestPosts";
import { Link } from "react-router";
const HomePage = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Featured />
      <About>
        <p className="py-3 text-gray-300">
            I am a Congolese painter currently based in Johannesburg, South Africa,
        where I pursue a pictorial exploration fueled by the city's energy and
        the diversity of my inspirations. My work explores the human and animal
        presence through portraits, silhouettes, and felines. 
        </p>
         <Link className="text-blue-400" to="/about">
          Learn more about me
        </Link>
      </About>
      <LatestPosts />
    </>
  );
};

export default HomePage;
