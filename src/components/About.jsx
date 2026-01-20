


const About = ({children}) => {
  return (
    <div className="m-auto mt-5 mb-5 max-w-6xl px-5  bg-gray-800 p-10 md:flex grid place-items-center  place-content-center   gap-5">
      <img
        className=" object-cover w-30 h-30 rounded-full border-5 border-blue-400"
        src="/profile.jpg"
        alt=""
      />

      <div className="md:flex md:flex-col md:place-items-start place-items-center md:text-start text-center ">
        <h1 className="text-white py-1 text-2xl font-semibold">👋 About Me</h1>
        {children}
       
      </div>
    </div>
  );
};

export default About;
