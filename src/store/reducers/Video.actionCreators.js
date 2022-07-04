import axios from 'axios';
import alertify from 'alertifyjs';
import { showFormAction } from './Modals.actionCreator';

import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_LOADING,
  GET_VIDEO_ERROR,
  VIDEO_DETAIL_SUCCESS,
  VIDEO_FILTER_SUCCESS,
  SEARCH_DATA,
  HAS_FILTER_VIDEO,
  UPLOAD_VIDEO_SUCCESS,
  VIDEO_COMMENTS_LOADING,
  VIDEO_COMMENTS_SUCCESS,
  POST_NEW_COMMENT_LOADING,
  ADD_NEW_COMMENT,
  RESET_INITIAL_STATE,
  IS_UPLOADING_VIDEO,
  SET_UPLOADING_PERCENTAGE,
} from './Video.actions';

const url = process.env.REACT_APP_BACKEND_URI;
const actionBody = (type, payload) => ({ type, payload });

export const postView = ({ viwer, videoId }) => {
  return async () => {
    try {
      await axios.post(`${url}/videos/${videoId}/view`, viwer);
    } catch (error) {
      alertify.notify(error.message, 'error', 5);
    }
  };
};

export const postVideo = (uploadData) => {
  return async (dispatch) => {
    try {
      dispatch(actionBody(GET_VIDEO_LOADING, true));
      dispatch(actionBody(IS_UPLOADING_VIDEO, true));
      const response = await axios.post(`${url}/videos`, uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const completed = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          dispatch(actionBody(SET_UPLOADING_PERCENTAGE, completed));
          // console.log(completed);
          if (completed === 100) {
            dispatch(actionBody(IS_UPLOADING_VIDEO, false));
            dispatch(actionBody(SET_UPLOADING_PERCENTAGE, 0));
          }
        },
      });
      if (response.status === 201) dispatch(showFormAction());
      dispatch(actionBody(UPLOAD_VIDEO_SUCCESS, response.data.video));
      alertify.notify('Video subido con exito', 'success', 5);
    } catch (error) {
      dispatch(actionBody(UPLOAD_VIDEO_SUCCESS, error));
      alertify.notify(error.message, 'error', 5);
    }
  };
};

export const postComment = (videoId, comment) => {
  const token = localStorage.getItem('token');
  const commentUrl = `${url}/videos/${videoId}/comments`;
  const commentData = { commentBody: comment };

  return async (dispatch) => {
    try {
      dispatch(actionBody(POST_NEW_COMMENT_LOADING, true));

      const res = await axios.post(commentUrl, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        const { comment: newComment } = res.data;
        dispatch({ type: ADD_NEW_COMMENT, payload: newComment });
        alertify.notify('Comentario creado', 'success', 5);
      }
    } catch (error) {
      alertify.notify(error.message, 'error', 5);
    } finally {
      dispatch(actionBody(POST_NEW_COMMENT_LOADING, false));
    }
  };
};

export const fetchAllVideos = (page = 1, limit = 12) => {
  const paramsObject = {
    page,
    limit,
  };
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_LOADING, payload: true });
      const { data } = await axios.get(`${url}/videos`, {
        params: paramsObject,
      });
      dispatch({ type: GET_VIDEO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_VIDEO_ERROR, payload: error });
    }
  };
};

export const fetchFilterVideos = (searchData) => {
  const paramsObject = {
    search: searchData,
    page: 1,
    limit: 10,
  };
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_LOADING, payload: true });
      const { data } = await axios.get(`${url}/videos/results`, {
        params: paramsObject,
      });
      dispatch({ type: VIDEO_FILTER_SUCCESS, payload: data.results });
    } catch (error) {
      dispatch({ type: GET_VIDEO_ERROR, payload: error });
    }
  };
};

export const getVideoComments = (videoId) => {
  const commentUrl = `${url}/videos/${videoId}/comments`;
  return async (dispatch) => {
    try {
      dispatch(actionBody(VIDEO_COMMENTS_LOADING, true));

      const res = await axios.get(commentUrl);
      const { comments } = res.data;
      dispatch(actionBody(VIDEO_COMMENTS_SUCCESS, comments));
    } catch (error) {
      alertify.alert('Alert Title', 'Alert Message!', () => {
        alertify.success('Ok');
      });
    } finally {
      dispatch(actionBody(VIDEO_COMMENTS_LOADING, false));
    }
  };
};

export const fetchVideoDetail = (videoId) => {
  return async (dispatch) => {
    try {
      dispatch(actionBody(GET_VIDEO_LOADING, true));
      const { data } = await axios.get(`${url}/videos/${videoId}`);
      dispatch(actionBody(VIDEO_DETAIL_SUCCESS, data.video));
    } catch (error) {
      dispatch({ type: GET_VIDEO_ERROR, payload: error });
    }
  };
};
export function actionSearchData(payload) {
  return { type: SEARCH_DATA, payload };
}

export function resetState(payload) {
  return { type: RESET_INITIAL_STATE, payload };
}

export function actionHasFilterVideo(payload) {
  return { type: HAS_FILTER_VIDEO, payload };
}
