import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postComment } from '../store/reducers/Video.actionCreators';
import '../styles/components/NewComment.scss';

export default function NewComment() {
  const { user, isAuth } = useSelector((state) => state.AuthReducer);
  const { postingNewComment } = useSelector((state) => state.VideoReducer);
  const [newComment, setNewComment] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();
  const { videoId } = useParams();

  const handleClick = async () => {
    dispatch(postComment(videoId, newComment));
  };

  useEffect(() => {
    if (!postingNewComment) {
      setNewComment('');
      setIsFocus(false);
    }
  }, [postingNewComment]);

  return (
    isAuth && (
      <form action="" className="new-comment">
        <figure className="new-comment__avatar">
          <img
            src={user.avatar}
            alt={user.fullName}
            className="new-comment__avatar__img"
          />
        </figure>
        <div className="new-comment__body">
          <textarea
            name="newcomment"
            id="newcomment"
            className="new-comment__input"
            placeholder="Añadir un comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={() => setIsFocus(true)}
            disabled={postingNewComment}
          />

          {isFocus && (
            <div className="new-comment__actions">
              {postingNewComment && (
                <p className="new-comment__loading">Loading...</p>
              )}
              <button
                type="button"
                disabled={postingNewComment}
                onClick={() => setIsFocus(false)}
                className="new-comment__btn new-comment__btn--cancel"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={postingNewComment || newComment.length < 3}
                onClick={handleClick}
                className="new-comment__btn new-comment__btn--done"
              >
                Comentar
              </button>
            </div>
          )}
        </div>
      </form>
    )
  );
}
