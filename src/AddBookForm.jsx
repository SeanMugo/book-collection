import { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [read, setRead] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !author.trim()) {
      alert('Please enter at least title and author');
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      year: year || 'N/A',
      read: read,
      cover: `https://picsum.photos/seed/${Date.now()}/400/300`
    };

    onAddBook(newBook);
    
    setTitle('');
    setAuthor('');
    setYear('');
    setRead(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border-2 border-dashed border-purple-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">➕ Add New Book</h3>
      
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Book Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          required
        />
        
        <input
          type="text"
          placeholder="Author *"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          required
        />
        
        <input
          type="text"
          placeholder="Year (e.g., 2024)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
        />
        
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={read}
            onChange={(e) => setRead(e.target.checked)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <span className="text-gray-700">I've read this book</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
        + Add Book
      </button>
    </form>
  );
};

export default AddBookForm;