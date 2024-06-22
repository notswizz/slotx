import { useState } from 'react';

const CommentModal = ({ isOpen, onClose, casino, addComment }) => {
  const [comment, setComment] = useState('');
  const [localComments, setLocalComments] = useState(casino.comments);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(casino.id, comment);
      setLocalComments([...localComments, comment]);
      setComment('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{casino.name} Comments</h2>
        <div className="mb-4 max-h-48 overflow-y-auto">
          <ul className="space-y-4">
            {localComments.map((comment, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <div className="flex flex-col w-full max-w-[320px] p-4 border rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-normal text-gray-900 dark:text-white">{comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Add a Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
