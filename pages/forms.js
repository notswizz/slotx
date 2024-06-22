import AddCasino from '../components/AddCasino';

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
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">Add a New Casino</h1>
      <AddCasino addCasino={addCasino} />
    </div>
  );
};

export default FormsPage;
