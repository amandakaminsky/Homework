import React from 'react';
export default function BookTable(props) {
  return (
    <div>
      <table className = "table mt-3">
        <thead>
          <tr>
            <th> Title </th>
            <th> Author </th>
            <th> ISBN </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody id = "table-body">
          {props.books.map((book) => {
            return (
              <tr key = {book.isbn} >
                <td> {book.title} </td>
                <td> {book.author} </td>
                <td> {book.isbn} </td>
                <td>
                  <button className = "btn btn-danger btn-sm me-2" onClick = {() => props.deleteBook(book)}> Delete </button>
                  <button className = "btn btn-warning btn-sm ms-2" onClick = {() => props.editBook(book)}> Edit </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
