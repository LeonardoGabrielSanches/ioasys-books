/* eslint-disable react/prop-types */

import './styles.scss';

export default function BookItem({ book }) {
  return (
    <div className="book-item-container">
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
