import TweetsCard from 'components/TweetsCard';
import React, { useState } from 'react'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from 'redux/operations/userOperations';
import { selectUsers } from 'redux/selectors/user';
import { Container } from 'shared/components/Container/Container.styled';
import { TweetsPageCss } from './TweetsPage.styled';
import Pagination from 'components/Pagination';
import { NavLink } from 'react-router-dom';
import DropDownMenu from 'shared/components/DropDownMenu';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  const [followUsers, setFollowUsers] = useState(null);
  const [followingUsers, setFollowingUsers] = useState(null);
  const users = followUsers || followingUsers || allUsers;
  console.log('chosen users', users)
  
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [cardsPerPage] = useState(3);
  const indexOfLastItem = currentPageNumber * cardsPerPage;
  const indexoFirstItem = indexOfLastItem - cardsPerPage;
  const currentUsers = users.slice(indexoFirstItem, indexOfLastItem)

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUser());
    }
  }, [dispatch, users])

  const paginate = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  }

  const filterFollow = () => {
     console.log('here follow')
    const followUsers = allUsers.filter((user) => user.isFollowing === false);
    console.log('filterFollow', followUsers)
    setFollowUsers(followUsers)
    console.log('follow', followUsers)
  };
  const filterFollowing = () => {
    console.log("here following");
    const followingUsers = allUsers.filter((user) => user.isFollowing);

    setFollowingUsers(followingUsers);
  };
  const filterAll = () => {
    setFollowUsers(null);
    setFollowingUsers(null);
  };

  return (
    <Container>
      <TweetsPageCss className="tweets">
        <NavLink className="tweet-link" to="/">
          Back
        </NavLink>
        <DropDownMenu filterFollow={filterFollow} filterFollowing={filterFollowing} filterAll={filterAll} />
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
          followUsers={followUsers}
          followingUsers={followingUsers}
        />
      </TweetsPageCss>
    </Container>
  );
}

export default TweetsPage