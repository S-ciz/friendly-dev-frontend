import { Link } from "react-router";
const Showcase = () => {
    return ( 

        <div className=" h-100 px-5 bg-gray-900 w-full flex flex-col items-center place-items-center place-content-center content-center">
        <h1 className="text-white font-bold text-3xl">Hey, I'm Cirhuza👋</h1>
        <p className="py-5 text-lg text-gray-300 text-center">
            I capture paintings exploring the beauty of the human experience and nature.
        </p>

        <div className="flex items-center gap-3 mt-3">
            <Link className="bg-blue-500 hover:bg-blue-600 text-white rounded px-10 py-2" to={"/project"}>View Projects</Link>
            <Link className="px-10 py-2 border border-blue-400 hover:bg-blue-500  hover:text-white rounded text-blue-400" to={"/contact"}>Contact Me</Link>
        </div>

        </div>
     );
}
 
export default Showcase;