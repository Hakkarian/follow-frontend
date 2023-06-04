import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUsers } from 'redux/selectors/user';
import { PaginationCss } from './Pagination.styled';

const Pagination = ({cardsPerPage, currentPageNumber, paginate, followUsers, followingUsers}) => {
  const users = useSelector(selectUsers);

  const totalUsers = followUsers ? followUsers.length : followingUsers ? followingUsers.length : users.length;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / cardsPerPage); i += 1) {
        pageNumbers.push(i)
    }

  return (
    <PaginationCss>
      <ul className="pagi-list">
        {pageNumbers.map((number) => (
          <li key={number}
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