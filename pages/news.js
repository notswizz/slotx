import SEO from '../components/SEO';
import Stories from '../components/Stories';


const NewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Latest News - SlotX"
        description="Stay updated with the latest news and stories about online casinos. Read the most recent updates and insights from SlotX."
        keywords="latest news, online casinos, casino news, SlotX news"
        url="https://SlotX.vercel.app/news"
        image="https://SlotX.vercel.app/path-to-image.jpg"
      />
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">Latest News</h1>
     
      <Stories />
    </div>
  );
};

export default NewsPage;