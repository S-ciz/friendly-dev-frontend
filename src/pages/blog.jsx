import Header from "../components/Header";
import { FaArrowRight } from "react-icons/fa6";

import { usePosts } from "../contexts/PostContext";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { formatDate } from "../utils";

function Blog({ post }) {
  return (
    <div className="p-5 bg-gray-800 mt-3 rounded">
      <h1 className="text-blue-400 font-bold text-xl ">{post.title}</h1>
      <small className="text-gray-400 ">{formatDate(post.date)}</small>
      <img
        className="w-full h-50 object-cover rounded mt-3"
        alt="no image"
        src={ !post.image ?  "/no-image.jpg" : post.image}
      />

      <p className="py-3 text-gray-300">{post.excerpt}</p>

      <Link
        to={`/blog/${post.slug}`}
        className="flex items-center gap-2 text-blue-300"
      >
        Read more <FaArrowRight />
      </Link>
    </div>
  );
}

const BlogPage = () => {
  const { posts, load, err } = usePosts();

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(posts);
  }, [posts]);

  return (
    <>
      <Header />
      <div className="max-w-3xl m-auto mt-8 bg-gray-900 p-5">
        <h1 className="py-5 text-3xl text-white font-bold "> ✍️ Blog</h1>

        <input
          className="w-full h-12 border rounded-lg border-gray-400 mb-5 px-5 focus:outline-none text-gray-300 bg-gray-800"
          type="text"
          placeholder="Search posts..."
        />

        {load && <h1 className="text-center text-green-700">Loading...</h1>}
        {!load && err && <h1 className="text-center text-red-700">{err}</h1>}

        {!load && !err && (
          <section>
            {list.map((item) => (
              <Blog post={item} key={item.slug} />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPage;
