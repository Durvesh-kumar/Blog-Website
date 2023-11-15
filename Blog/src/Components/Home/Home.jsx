import BlogPage from "../Blog/BlogPage";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="text-black">
      <Banner/>
      <div className="max-w7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
}
