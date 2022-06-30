import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es-do';
import '../styles/components/UserComment.scss';
import Avatar from './Avatar';

dayjs.extend(relativeTime);
dayjs.locale('es-do');

function UserComment({ comment }) {
  const { user } = comment;
  const createdAt = dayjs(comment.createdAt).fromNow();

  return (
    <div className="user-comment" key={comment.id}>
      <Avatar src={user.avatarUrl} alt={user.fullName} width="30" />

      {/* Content */}
      <div className="user-comment__content">
        {/* Title */}
        <h2 className="user-comment__title">
          <strong className="user-comment__user-name">{user.fullName}</strong>
          <span className="user-comment__relative-time">{createdAt}</span>
        </h2>
        {/* Body */}
        <div className="user-comment__body">{comment.body}</div>
        {/* Actions */}
        <div className="user-comment__action">
          {/* <ButtonAction prependIcon={<LikeIcon />} />
          <span className="user-comment__likes">{comment.likes}</span> */}
        </div>
      </div>
    </div>
  );
}

export default UserComment;
