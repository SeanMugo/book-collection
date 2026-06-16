const BookItem = ({ book, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-purple-500 group relative">
      {/* Book Cover */}
      <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
        {book.cover ? (
          <img 
            src={book.cover} 
            alt={book.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-6xl">📖</span>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg truncate">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm">by {book.author}</p>
        <p className="text-gray-400 text-xs mt-1">{book.year}</p>
        
        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
          book.read 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {book.read ? '✅ Read' : '📖 Unread'}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(book.id)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
        aria-label="Delete book"
      >
        ✕
      </button>
    </div>
  );
};

export default BookItem;