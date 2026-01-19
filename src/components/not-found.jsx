
import { Link } from "react-router";
const NotFound = () => {
    return (<section className="h-[80vh] grid place-items-center place-content-center">

         <div className="container min-w-100 max-w-full m-auto  p-5 bg-gray-800 flex flex-col place-items-center place-content-center rounded-lg">
  
          <Link className="text-blue-400 text-lg py-3" to={"/"}>⬅️ Return to Home</Link>
          <h1 className="text-xl text-red-400 py-3">Page not found</h1>
          <p className="text-gray-400">Oops! The page you tried to access is not available</p>
          <Link className="border hover:bg-blue-500  border-blue-400 text-blue-200 py-2 px-3 mt-5 rounded" to={"/"}>Return home</Link>
           
    </div>
    </section> );
}
 
export default NotFound;