import BookItem from './BookItem';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        My Book Collection ({books.length})
      </h2>
      
      {books.length === 0 ? (
        <p className="text-center text-gray-500 py-10 text-lg">
          No books yet. Add one below! 📚
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookItem 
              key={book.id} 
              book={book} 
              onDelete={onDeleteBook}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;