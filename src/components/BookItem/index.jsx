/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import './styles.scss';

export default function BookItem({ book, handleSelectBook }) {
  return (
    <div className="book-item-container" onClick={handleSelectBook}>
      <img src={book.imageUrl} alt={book.title} />
      <section>
        <header>
          <h1>{book.title}</h1>
          {book.authors.map(author => (
            <p>{author}</p>
          ))}
        </header>

        <div>
          <p>{book.pageCount} páginas</p>
          <p>Editora {book.publisher}</p>
          <p>Publicado em {book.published}</p>
        </div>
      </section>
    </div>
  );
}
