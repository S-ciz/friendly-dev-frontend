import Header from "../components/Header";
const ContactPage = () => {
    return ( 

        <>
         <Header />
      <form method="POST" action="https://formspree.io/f/mdopeled" className="max-w-3xl m-auto mt-8 bg-gray-900 p-5">
        <h1 className="py-5 text-3xl text-center text-white font-bold "> 📧 Contact me</h1>

        <div  className="block">
            <label className="text-gray-500 font-bold" htmlFor="">Full name</label>
            <input
          className="w-full h-12 border rounded-lg border-gray-600 mb-5 px-5 focus:outline-none text-gray-300 bg-gray-800"
          type="text"
          name="Name"
          required={true}
         
        />
        </div>
        <div  className="block">
            <label className="text-gray-500 font-bold" htmlFor="">Email</label>
            <input
          className="w-full h-12 border rounded-lg border-gray-600 mb-5 px-5 focus:outline-none text-gray-300 bg-gray-800"
          type="email"
          required={true}
          name="Email"

         
        />
        </div>
        <div  className="block">
            <label className="text-gray-500 font-bold" htmlFor="">Subject</label>
            <input
          className="w-full h-12 border rounded-lg border-gray-600 mb-5 px-5 focus:outline-none text-gray-300 bg-gray-800"
          type="text"
          required={true}
          name="Subject"
         
        />
        </div>
        <div  className="block">
            <label className="text-gray-500 font-bold" htmlFor="">Message</label>
            <textarea
          className="w-full h-20 border rounded-lg border-gray-600 mb-5 px-5 focus:outline-none text-gray-300 bg-gray-800"
          required={true}
          name="Message"
         
        />
        </div>

    <button className="bg-blue-500 text-gray-100 w-full py-3 cursor-pointer rounded">Send Message</button>

      </form>
        </>
      );
}
 
export default ContactPage;