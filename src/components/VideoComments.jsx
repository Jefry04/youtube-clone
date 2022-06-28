import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/VideoComments.scss';

import UserComment from './UserComment';
import NewComment from './NewComment';

function VideoComments() {
  const { comments, loadingVideoComments } = useSelector(
    (state) => state.VideoReducer
  );

  let body = (
    <p className="video-comments__not-comments">Cargando los comentarios...</p>
  );

  if (!loadingVideoComments) {
    if (comments.length > 0) {
      body = comments.map((comment) => (
        <UserComment key={comment.id} comment={comment} />
      ));
    } else {
      body = (
        <p className="video-comments__not-comments">
          No hay comentarios en este video.
        </p>
      );
    }
  }

  return (
    <div className="video-comments">
      <header className="video-comments__header">
        <NewComment />
      </header>
      <div className="video-comments__body">{body}</div>
    </div>
  );
}

export default VideoComments;
