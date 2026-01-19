import { usePosts } from "../contexts/PostContext";
import { Link } from "react-router";
import { formatDate } from "../utils";

const Post = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="bg-gray-800  p-5 rounded-lg ">
        <h1 className="text-blue-400 pb-2 font-bold">{post.title}</h1>
        <p className="text-gray-400 pb-2">{post.excerpt}</p>
        <small className="text-gray-500">{formatDate(post.date)}</small>
      </div>
    </Link>
  );
};

const LatestPosts = () => {
  const { posts, load, err } = usePosts();

  const copy = posts.length > 3 ? [...posts].reverse().slice(0, 3) : [...posts];
  return (
    <>
      {load && <p className="text-center py-3 text-green-700">Loading...</p>}
      {!load && err && (
        <h1 className="text-center text-red-500 text-2xl">{err}</h1>
      )}

      {!load && !err && (
        <div className="max-w-6xl md:px-1 px-3 m-auto mb-5">
          <h1 className="py-5 text-gray-600 text-2xl font-bold">
            🆕 Latest Posts
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
            {copy.map((p) => (
              <Post post={p} key={p.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LatestPosts;
