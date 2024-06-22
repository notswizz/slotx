import { useState } from 'react';

const AddStory = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [words, setWords] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = { title, image, words };

    const response = await fetch('/api/stories/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStory),
    });

    if (response.ok) {
      setTitle('');
      setImage('');
      setWords('');
      // Optionally refresh the stories list or notify the user
    } else {
      console.error('Error adding story');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add a New Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Words</label>
          <textarea
            value={words}
            onChange={(e) => setWords(e.target.value)}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Story
        </button>
      </form>
    </div>
  );
};

export default AddStory;
