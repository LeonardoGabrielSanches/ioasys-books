import nextImg from '../../assets/next.svg';
import prevImg from '../../assets/prev.svg';

import './styles.scss';

export default function Pagination({ page, handleSetPage, totalPages }) {
  function handlePreviousPage() {
    if (page <= 1) return;

    handleSetPage(page - 1);
  }

  function handleNextPage() {
    if (page >= totalPages) return;

    handleSetPage(page + 1);
  }

  return (
    <div className="pagination-container">
      <span>
        Página <strong>{page}</strong> de <strong>{totalPages}</strong>
      </span>
      <button type="button" onClick={handlePreviousPage}>
        <img src={prevImg} alt="Previous" />
      </button>
      <button type="button" onClick={handleNextPage}>
        <img src={nextImg} alt="Next" />
      </button>
    </div>
  );
}
