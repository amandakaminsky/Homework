import React, {useState, useEffect} from 'react';
import {Book} from '../models/book';

export default function BookForm(props) {
  const[title, setTitle] = useState('');
  const[author, setAuthor] = useState('');
  const[isbn, setIsbn] = useState('');

  /* useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]); */

  function onBookFormSubmit(e) {
    e.preventDefault();
    if (!valid()) return;
    let book = new Book(title, author, isbn);
    props.createBook(book);
    clearInputs();
  }

  function valid() {
    return title !== '' && author !== '' && isbn !== '';
  }

  function clearInputs() {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  return (
    <div>
      <h1>Library</h1>
      <form id = "form" onSubmit={onBookFormSubmit}>
        <div className = "mb-3">
          <label className = "form-label"> Title </label>
          <input id = "title-input" type = "text" className = "form-control" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
        </div>
        <div className = "mb-3">
          <label className="form-label"> Author </label>
          <input id = "author-input" type = "text" className = "form-control" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className = "mb-3">
          <label className = "form-label"> #ISBN </label>
          <input id = "isbn-input" type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
        </div>
        <div className = "d-grid mt-5">
          <button className = "btn btn-outline-primary" type="submit"> {props.bookToEdit ? 'Update Book' : 'Add Book'} </button>
        </div>
      </form>
    </div>
  );
}
