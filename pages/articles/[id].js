import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import { marked } from 'marked';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/articles/${id}`)
        .then((res) => res.json())
        .then((data) => setArticle(data))
        .catch((error) => console.error('Error fetching article:', error));
    }
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={article.title}
        description={article.words.slice(0, 150)}
        keywords={article.title.split(' ').join(', ')}
        url={`https://SlotX.vercel.app/articles/${id}`}
        image={article.image}
      />
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">{article.title}</h1>
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded mb-10" />
      )}
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: marked.parse(article.words) }}
      ></div>
    </div>
  );
};

export default ArticlePage;
