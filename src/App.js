import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// If you export default then you don't need the brackets
import { Book } from './models/book';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import BookService from './services/library-service';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
      }
    },

    []
  );

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(title, author, isbn) {
    const book = await BookService.createBook(new Book(null, title, author, isbn));
    setBooks([...books, book]);
  }

  async function onBookRemove(bookId) {
    await BookService.deleteBook(bookId);
    setBooks(books.filter((book) => book.id !== bookId));
  }

  async function onBookEdit(bookId) {
    const bookToEdit = books.find((book) => book.id === bookId);
    const updatedBook = await BookService.updateBook(bookToEdit);

    setBooks(
      books.map((book) => {
        return book.id === bookId ? updatedBook : book;
      })
    );
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <BookForm onBookCreate={onBookCreate}></BookForm>
        <BookTable
          books={books}
          onBookRemove={onBookRemove}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
