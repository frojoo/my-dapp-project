import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <div>
      <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
        {/* object-fit: cover 이미지가 들어온다면 */}
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </ul>
    </div>
  );
}

export default Portfolio;
