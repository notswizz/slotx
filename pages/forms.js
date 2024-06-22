import SEO from '../components/SEO';
import AddCasino from '../components/AddCasino';
import AddStory from '../components/AddStory';

const FormsPage = () => {
  const addCasino = (newCasino) => {
    // Handle the API call to persist the new casino to your backend
    fetch('/api/casinos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCasino),
    }).catch((error) => console.error('Error adding casino:', error));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Add a New Casino - Best Online Casinos | SlotX"
        description="Add a new online casino to our list. Share your favorite online casino with top bonuses, games, and secure payment options."
        keywords="add online casino, online casinos, best online casinos, casino bonuses, secure online casinos"
        url="https://SlotX.vercel.app/forms"
        image="https://SlotX.vercel.app/path-to-image.jpg"
      />
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">Add a New Casino</h1>
      <AddCasino addCasino={addCasino} />
      <AddStory/>
    </div>
  );
};

export default FormsPage;
