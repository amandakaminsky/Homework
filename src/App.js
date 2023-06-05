import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function createBook(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  function deleteBook(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function editBook(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className = "text-center m-5">
      <div className = "card p-5">
        <BookForm bookToEdit = {bookToEdit} createBook = {createBook} > </BookForm>
        <BookTable books = {books} editBook = {editBook} deleteBook = {deleteBook}> </BookTable>
      </div>
    </div>
  );
}
export default App;