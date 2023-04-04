import { useSearchParams } from "react-router-dom";

function Portfolio() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const image = searchParams.get("image");

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt="prjoect" />
      <div className="mt-8 text-4xl font-bold">{title}</div>
      <div className="mt-8">{desc}</div>
    </div>
  );
}

export default Portfolio;
