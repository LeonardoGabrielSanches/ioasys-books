import blackLogoImg from '../../assets/black-logo.png';
import logoutImg from '../../assets/logout.svg';

import './styles.scss';

export default function BookList() {
  return (
    <div className="book-list-container">
      <header>
        <h1>
          <img src={blackLogoImg} alt="Logo" /> Books
        </h1>

        <div>
          <span>Bem vindo, <strong>Leonardo!</strong></span>
          <img src={logoutImg} alt="logout" />
        </div>
      </header>
    </div>
  )
}
