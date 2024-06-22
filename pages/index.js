import SEO from '../components/SEO';
import Casino from '../components/Casino';

const IndexPage = () => {
  return (
    <div>
      <SEO
        title="Casino Chronicles -- Best Online Casinos - Find Top Online Casino Sites"
        description="Discover the best online casinos with top bonuses, games, and secure payment options. Start playing today at the top-rated online casino sites."
        keywords="online casinos, best online casinos, top online casino sites, casino bonuses, secure online casinos"
        url="https://slotx.vercel.app/"
        image="/logo2.webp" // Path to the image in the public folder
      />
      <Casino />
    </div>
  );
};

export default IndexPage;
