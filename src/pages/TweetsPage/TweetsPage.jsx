import React from 'react'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from 'redux/operations/userOperations';
import { selectUsers } from 'redux/selectors/user';

const TweetsPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log('tweets page', users)

  useEffect(() => {
    console.log('here effect')
    dispatch(fetchUser());
    console.log('here after')
  }, [dispatch])

  return (
    <section>
      {users.length !== 0 && (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} width={180} height={150}/>
              <p>{user.tweets}</p>
              <p>{user.followers}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TweetsPage