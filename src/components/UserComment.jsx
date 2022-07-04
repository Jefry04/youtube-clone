import React from 'react';
import dayjs from 'dayjs';
import { Trash } from 'tabler-icons-react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es-do';
import '../styles/components/UserComment.scss';
import Avatar from './Avatar';
import ButtonAction from './ButtonAction';
import { removeComment } from '../store/reducers/Video.actionCreators';

dayjs.extend(relativeTime);
dayjs.locale('es-do');

function UserComment({ comment }) {
  const { user: AuthUser, isAuth } = useSelector((state) => state.AuthReducer);
  const { deleteCommentLoading } = useSelector((state) => state.VideoReducer);
  const { user: commentUser } = comment;
  const createdAt = dayjs(comment.createdAt).fromNow();
  const { videoId } = useParams();

  const canDelete = isAuth && AuthUser.id === commentUser.id;
  const dispatch = useDispatch();

  const handleClik = () => {
    dispatch(removeComment(videoId, comment.id));
  };

  return (
    <div className="user-comment" key={comment.id}>
      <Avatar
        src={commentUser.avatarUrl}
        alt={commentUser.fullName}
        width="30"
      />

      {/* Content */}
      <div className="user-comment__content">
        {/* Title */}
        <h2 className="user-comment__title">
          <strong className="user-comment__user-name">
            {commentUser.fullName}
          </strong>
          <span className="user-comment__relative-time">{createdAt}</span>
        </h2>
        {/* Body */}
        <div className="user-comment__body">{comment.body}</div>
        {/* Actions */}
        <div className="user-comment__action">
          {/* <ButtonAction prependIcon={<LikeIcon />} /> */}
          {canDelete && (
            <ButtonAction
              prependIcon={<Trash size={16} />}
              content="Eliminar"
              isDisabled={deleteCommentLoading === comment.id}
              handleClick={handleClik}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserComment;
