import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LikeIcon from '../assets/icons/LikeIcon';
import ButtonAction from './ButtonAction';

const buildComments = (posts) => {
  const users = ['John Doe', 'Maria Angelica', 'Josefina', 'Antonieta'];
  const comments = [];

  posts.forEach((post) => {
    const userName = users[Math.floor(Math.random() * users.length)];
    const avatarName = userName.replace(' ', '+');
    const avatarUrl = `https://ui-avatars.com/api/?background=0D8ABC&color=fff?&name=${avatarName}`;
    const comment = post.body;
    const likes = Math.floor(Math.random() * 2000);

    comments.push({
      id: post.id,
      userName,
      avatarUrl,
      comment,
      likes,
    });
  });

  return comments;
};

const fetchComments = async () => {
  let comments = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    comments = buildComments(res.data);
  } catch (error) {
    // console.log(error);
  }

  return comments;
};

function VideoComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const promise = fetchComments();
    promise.then((res) => setComments(res));
  }, []);
  return (
    <div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          {/* Avatar */}
          <figure className="comment__avatar">
            <img
              src={comment.avatarUrl}
              alt={comment.userName}
              className="comment__avatar__img"
            />
          </figure>

          {/* Content */}
          <div className="comment__content">
            {/* Title */}
            <h2 className="comment__title">
              <strong className="comment__user-name">{comment.userName}</strong>
              <span className="comment__relative-time">hace 16 horas</span>
            </h2>
            {/* Body */}
            <div className="comment__body">{comment.comment}</div>
            {/* Actions */}
            <div className="comment__action">
              <ButtonAction prependIcon={<LikeIcon />} />
              <span className="comment__likes">{comment.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoComments;
