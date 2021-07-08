import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

Modal.setAppElement('#root');

export default function BookModal() {
  return (
    <Modal isOpen className="book-modal-container">
      <button type="button">
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
