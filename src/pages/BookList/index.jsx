import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';

import Pagination from '../../components/Pagination';
import BookModal from '../../components/BookModal';
import BookItem from '../../components/BookItem';

import api from '../../services/api';

import blackLogoImg from '../../assets/black-logo.png';
import logoutImg from '../../assets/logout.svg';

import './styles.scss';

export default function BookList() {
  const { logout } = useAuth();

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalBookPages, setTotalBookPages] = useState(0);

  const loadBooksByPage = useCallback(async () => {
    const response = await api.get(`books?page=${page}&amount=12`);

    const { data, totalPages } = response.data;

    setBooks(data);
    setTotalBookPages(Math.round(totalPages));
  }, [page]);

  useEffect(() => {
    loadBooksByPage();
  }, [loadBooksByPage]);

  function handleLogout() {
    logout();
  }

  return (
    <>
      <div className="book-list-container">
        <header>
          <h1>
            <img src={blackLogoImg} alt="Logo" /> Books
          </h1>

          <div>
            <span>
              Bem vindo, <strong>Leonardo!</strong>
            </span>
            <button type="button" onClick={handleLogout}>
              <img src={logoutImg} alt="logout" />
            </button>
          </div>
        </header>

        <section className="book-list-content">
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </section>
        <footer>
          <Pagination
            page={page}
            handleSetPage={setPage}
            totalPages={totalBookPages}
          />
        </footer>
      </div>
      <BookModal isOpen />
    </>
  );
}
