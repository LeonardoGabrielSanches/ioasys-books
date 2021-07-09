import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import quotesImg from '../../assets/quotes.svg';

import './styles.scss';

Modal.setAppElement('#root');

export default function BookModal({ isOpen, book, handleCloseModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="book-modal-container"
    >
      <button
        className="book-modal-close"
        type="button"
        onClick={handleCloseModal}
      >
        <img src={closeImg} alt="Close" />
      </button>

      <div className="book-modal-content">
        <img className="book-image" src={book?.imageUrl} alt={book?.title} />

        <div>
          <section>
            <h1>{book?.title}</h1>
            <p>{book?.authors.join()}</p>
          </section>

          <section>
            <h1>Informações</h1>

            <div className="book-modal-table">
              Páginas
              <span>{`${book?.pageCount} páginas`}</span>
            </div>

            <div className="book-modal-table">
              Editora
              <span>{book?.publisher}</span>
            </div>

            <div className="book-modal-table">
              Publicação
              <span>{book?.published}</span>
            </div>

            <div className="book-modal-table">
              Idioma
              <span>{book?.language}</span>
            </div>

            <div className="book-modal-table">
              Título Original
              <span>{book?.title}</span>
            </div>

            <div className="book-modal-table">
              ISBN-10
              <span>{book?.isbn10}</span>
            </div>

            <div className="book-modal-table">
              ISBN-13
              <span>{book?.isbn13}</span>
            </div>
          </section>

          <h1>Resenha</h1>
          <cite>
            <img src={quotesImg} alt="Quotes" />
            {book?.description}
          </cite>
        </div>
      </div>
    </Modal>
  );
}
