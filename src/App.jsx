import { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const initialBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    read: true,
    cover: 'https://picsum.photos/seed/1/400/300'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: '1960',
    read: true,
    cover: 'https://picsum.photos/seed/2/400/300'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: '1949',
    read: false,
    cover: 'https://picsum.photos/seed/3/400/300'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: '1813',
    read: false,
    cover: 'https://picsum.photos/seed/4/400/300'
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: '1951',
    read: true,
    cover: 'https://picsum.photos/seed/5/400/300'
  }
];

function App() {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  const deleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== bookId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        <header className="text-center mb-8 pb-6 border-b-2 border-purple-200">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            📚 Book Collection
          </h1>
          <p className="text-gray-600 mt-2">Manage your personal library</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AddBookForm onAddBook={addBook} />
          </div>
          <div className="lg:col-span-2">
            <BookList books={books} onDeleteBook={deleteBook} />
          </div>
        </main>

        <footer className="mt-8 pt-6 border-t-2 border-gray-200 flex flex-wrap justify-between items-center text-gray-600">
          <p className="font-semibold">📖 Total Books: {books.length}</p>
          <div className="flex gap-4">
            <span className="text-green-600">✅ Read: {books.filter(b => b.read).length}</span>
            <span className="text-yellow-600">📖 Unread: {books.filter(b => !b.read).length}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;