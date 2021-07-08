import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import './styles.scss';

Modal.setAppElement('#root');

export default function BookModal({ isOpen }) {
  return (
    <Modal isOpen={isOpen} className="book-modal-container">
      <button className="book-modal-close" type="button">
        <img src={closeImg} alt="Close" />
      </button>

      <div className="book-modal-content">
        <img src="" alt="" />

        <section>
          <h1>Titulo</h1>
          <p>SUb</p>

          <h1>Informações</h1>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>

          <h1>Resenha</h1>
          <cite>Citação de livro</cite>
        </section>
      </div>
    </Modal>
  );
}
