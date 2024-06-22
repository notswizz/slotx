import { useState, useEffect } from 'react';
import { marked } from 'marked';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  useEffect(() => {
    fetch('/api/stories')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => console.error('Error fetching stories:', error));
  }, []);

  const handleExpand = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div key={story.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => handleExpand(story.id)}>
                {story.title}
              </h3>
              {story.image && (
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded mb-6 border border-gray-300 transition duration-300" />
              )}
              {expandedStoryId === story.id && (
                <div
                  className="prose max-w-none text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: marked.parse(story.words) }}
                ></div>
              )}
              <button
                className="text-blue-600 hover:underline border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => handleExpand(story.id)}
              >
                {expandedStoryId === story.id ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
