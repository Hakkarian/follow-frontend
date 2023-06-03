import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUsers } from 'redux/selectors/user';
import { PaginationCss } from './Pagination.styled';

const Pagination = ({cardsPerPage, currentPageNumber, paginate}) => {
    const users = useSelector(selectUsers);
    const totalUsers = users.length;
    console.log('total users', users, totalUsers)

    const pageNumbers = [];

    console.log(totalUsers / cardsPerPage);

    for (let i = 1; i <= Math.ceil(totalUsers / cardsPerPage); i += 1) {
        pageNumbers.push(i)
        console.log('page numbers', pageNumbers)
    }

  return (
    <PaginationCss>
      <ul className="pagi-list">
        {pageNumbers.map((number) => (
          <li
            className={`pagi-item ${
              number === currentPageNumber ? "page-active" : "page"
            }`}
          >
            <NavLink
              className={`pagi-link ${
                number === currentPageNumber ? "page-active" : "page"
              }`}
              to="#"
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </PaginationCss>
  );
}

export default Pagination