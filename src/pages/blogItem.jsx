import Header from "../components/Header";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useHref } from "react-router";
import { usePosts } from "../contexts/PostContext";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

import { formatDate } from "../utils";

const BlogItemPage = () => {
  const ref = useHref();
  const slug = ref.split("/")[2];

  const [post, setPost] = useState([]);

  const { posts } = usePosts();

  useEffect(() => {
    setPost(posts);
  }, [posts]);

  const single = post.filter((p) => p.slug === slug);

  return (
    <>
      <Header />

      {single.length == 0 && (
        <h1 className="text-red-400 text-center">Oops! Blog is not found!</h1>
      )}

      {single.length > 0 && (
        <div className="max-w-6xl m-auto mt-5 p-5 bg-gray-800">
          <h1 className="text-blue-400 text-2xl font-bold py-3">
            {single[0].title}
          </h1>
          <p className=" text-gray-400 font-semibold">
            {" "}
            {formatDate(single[0].date)}{" "}
          </p>

          <img
            className="h-50 w-full object-cover mt-3"
            src={!single[0].image ? "/no-image.jpg" : single[0].image}
            alt=""
          />

          <h2 className="text-lg text-gray-100 py-3"> {single[0].excerpt} </h2>

          <div className="text-gray-200 text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {single[0].content}
            </ReactMarkdown>
          </div>

          <Link
            to="/blog"
            className="text-gray-100 flex items-center gap-3 w-max bg-blue-600 px-5 py-3 rounded mt-3"
          >
            {" "}
            <FaArrowLeft /> Back to posts
          </Link>
        </div>
      )}
    </>
  );
};

export default BlogItemPage;
