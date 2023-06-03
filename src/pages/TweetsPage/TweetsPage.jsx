import TweetsCard from 'components/TweetsCard';
import React, { useState } from 'react'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from 'redux/operations/userOperations';
import { selectUsers } from 'redux/selectors/user';
import { Container } from 'shared/components/Container/Container.styled';
import { TweetsPageCss } from './TweetsPage.styled';
import Pagination from 'components/Pagination';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [cardsPerPage] = useState(3);
  const indexOfLastItem = currentPageNumber * cardsPerPage;
  const indexoFirstItem = indexOfLastItem - cardsPerPage;
  const currentUsers = users.slice(indexoFirstItem, indexOfLastItem)

  useEffect(() => {
    console.log('here effect')
    if (!users.length) {
      dispatch(fetchUser());
    }
    console.log('here after')
  }, [dispatch, users])

  const paginate = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  }

  return (
    <Container>
      <TweetsPageCss className="tweets">
        {users.length !== 0 && (
          <ul className="tweets-list">
            {currentUsers.map((user) => (
              <li
                className={`card ${
                  user.isFollowing ? "card-following" : "card-follow"
                }`}
                key={user._id}
              >
                <TweetsCard user={user} />
              </li>
            ))}
          </ul>
        )}
        <Pagination
          paginate={paginate}
          totalUsers={users.length}
          cardsPerPage={cardsPerPage}
          currentPageNumber={currentPageNumber}
        />
      </TweetsPageCss>
    </Container>
  );
}

export default TweetsPage