import React from 'react';
import { useState, useEffect } from 'react';

import { Book } from '../../models/Book';
import BookInput from './BookInput';
import BookTable from './BookTable';
import BookService from '../../services/book-service';

export default function BookPage(props) {
    const[books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    
    useEffect(() => {
      if (!books.length) {
        onInitialLoad();
      }

    },[]);


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
        <BookInput onBookCreate={onBookCreate}></BookInput> 
        <BookTable books = {books} editBook = {onBookEdit} deleteBook = {onBookRemove} addBook = {onBookCreate} title={title}> </BookTable>
      </div>
    </div>
    );
}