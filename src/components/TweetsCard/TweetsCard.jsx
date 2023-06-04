import message from 'images/message1.png';
import logo from 'images/logo.png';
import { useDispatch } from 'react-redux';

import { followTweet, notFollowTweet } from 'redux/reducers/userReducer';

const TweetsCard = ({ user }) => {
    const dispatch = useDispatch();

  const handleFollow = (user) => {
    console.log('here handleFollow')
      const {isFollowing} = user
        if (isFollowing) {
            dispatch(notFollowTweet(user))
        }
        if (!isFollowing) {
            dispatch(followTweet(user));
    }
    }

  const decorateFollowers = (number) => {
    if (number > 1000) {
      const numArr = number.toString().split('');
      numArr.splice(numArr.length - 3, 0, ',')

      return numArr.join('')
    }
  }
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <img
        className="message"
        src={message}
        alt="message"
        width={308}
        height={168}
      />
      <div
        className={`tweet-wrap ${
          user.isFollowing ? "tweet-following" : "tweet-follow"
        }`}
      >
        <img
          className={`image ${
            user.isFollowing ? "image-following" : "image-follow"
          }`}
          src={user.avatar}
          alt={user.name}
          width={62}
          height={62}
        />
        <div
          className={`text-wrap ${
            user.isFollowing ? "text-following" : "text-follow"
          }`}
        >
          <p className="tweets">{user.tweets} tweets</p>
          <p className="followers">{decorateFollowers(user.followers)} followers</p>
        </div>
        <button
          className={user.isFollowing ? "following" : "follow"}
          type="button"
          onClick={() => handleFollow(user)}
        >
          {user.isFollowing ? "following" : "follow"}
        </button>
      </div>
    </>
  );
}

export default TweetsCard