import { useState, useEffect } from 'react';
import { marked } from 'marked';
import Modal from './Modal';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [expandedStory, setExpandedStory] = useState(null);

  useEffect(() => {
    fetch('/api/stories')
      .then((res) => res.json())
      .then((data) => {
        const storiesWithShares = data.map(story => ({
          ...story,
          shares: story.shares !== undefined ? story.shares : 0,
        }));
        console.log('Stories with shares:', storiesWithShares); // Log the stories with shares
        setStories(storiesWithShares);
      })
      .catch((error) => console.error('Error fetching stories:', error));
  }, []);

  const handleExpand = (story) => {
    setExpandedStory(story);
  };

  const handleCloseModal = () => {
    setExpandedStory(null);
  };

  const handleShare = async (id) => {
    const url = `${window.location.origin}/news/${id}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');

    try {
      const response = await fetch('/api/stories/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to share story');
      }

      const updatedStory = await response.json();
      console.log('Updated story after share:', updatedStory); // Log the updated story
      setStories((prevStories) =>
        prevStories.map((story) => (story.id === updatedStory.id ? updatedStory : story))
      );
    } catch (error) {
      console.error('Error sharing story:', error);
    }
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div key={story.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => handleExpand(story)}>
                {story.title}
              </h3>
              {story.image && (
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded mb-6 border border-gray-300 transition duration-300" />
              )}
              <button
                className="text-blue-600 hover:underline border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => handleExpand(story)}
              >
                Read
              </button>
              <button
                className="text-green-600 hover:underline border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-all duration-300 ml-2"
                onClick={() => handleShare(story.id)}
              >
                Share ({story.shares})
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal show={!!expandedStory} onClose={handleCloseModal}>
        {expandedStory && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{expandedStory.title}</h3>
            {expandedStory.image && (
              <img src={expandedStory.image} alt={expandedStory.title} className="w-full h-48 object-cover rounded mb-6 border border-gray-300 transition duration-300" />
            )}
            <div className="prose max-w-none text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: marked.parse(expandedStory.words) }}></div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Stories;
