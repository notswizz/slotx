import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import SEO from '../../components/SEO';

const StoryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [story, setStory] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/stories/${id}`)
        .then((res) => res.json())
        .then((data) => setStory(data))
        .catch((error) => console.error('Error fetching story:', error));
    }
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={story.title}
        description={story.description || 'Read the full story on SlotX.'}
        keywords="latest news, online casinos, casino news, SlotX news"
        url={`https://SlotX.vercel.app/news/${id}`}
        image={story.image || 'https://SlotX.vercel.app/path-to-image.jpg'}
      />
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">{story.title}</h1>
      {story.image && (
        <img src={story.image} alt={story.title} className="w-full h-96 object-cover rounded mb-6 border border-gray-300" />
      )}
      <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: marked.parse(story.words) }}></div>
    </div>
  );
};

export default StoryPage;
