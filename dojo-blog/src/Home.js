import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {blog && <BlogList blogs={blog} title={"Diegos blogs"} />}
    </div>
  );
};

export default Home;
