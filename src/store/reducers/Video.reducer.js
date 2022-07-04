/* eslint-disable no-underscore-dangle */
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

const initialState = {
  videos: [],
  loading: false,
  uploading: true,
  uploadingPercentage: 50,
  uploadedVideo: {},
  error: null,
  hasFilterVideos: false,
  filtersVideo: [],
  searchData: '',
  videoDetail: {},
  loadingVideoComments: false,
  comments: [],
  postingNewComment: false,
  hasMore: false,
  hasPrevious: false,
};

function VideoReducer(state = initialState, action = null) {
  if (action.type === RESET_INITIAL_STATE)
    return {
      ...initialState,
    };
  if (action.type === SEARCH_DATA)
    return {
      ...state,
      searchData: action.payload,
    };
  if (action.type === HAS_FILTER_VIDEO)
    return {
      ...state,
      hasFilterVideos: action.payload,
    };
  if (action.type === GET_VIDEO_LOADING)
    return {
      ...state,
      loading: action.payload,
    };
  if (action.type === GET_VIDEO_SUCCESS)
    return {
      ...state,
      loading: false,
      videos: action.payload.videos,
      hasMore: action.payload.next,
      hasPrevious: action.payload.previous,
      hasFilterVideos: false,
      error: null,
    };
  if (action.type === UPLOAD_VIDEO_SUCCESS)
    return {
      ...state,
      loading: false,
      uploadedVideo: action.payload,
      hasFilterVideos: false,
      error: null,
    };
  if (action.type === GET_VIDEO_ERROR)
    return {
      ...state,
      loading: false,
      videos: null,
      filtersVideo: null,
      videoDetail: null,
      error: action.payload,
    };
  if (action.type === VIDEO_DETAIL_SUCCESS) {
    const video = action.payload;
    return {
      ...state,
      loading: false,
      videoDetail: video,
      error: null,
    };
  }
  if (action.type === VIDEO_FILTER_SUCCESS)
    return {
      ...state,
      loading: false,
      filtersVideo: action.payload,
      error: null,
    };
  if (action.type === VIDEO_COMMENTS_LOADING) {
    return {
      ...state,
      loadingVideoComments: action.payload,
    };
  }
  if (action.type === VIDEO_COMMENTS_SUCCESS) {
    const comments = action.payload;
    return {
      ...state,
      comments,
    };
  }
  if (action.type === POST_NEW_COMMENT_LOADING) {
    return {
      ...state,
      postingNewComment: action.payload,
    };
  }
  if (action.type === ADD_NEW_COMMENT) {
    const newComment = action.payload;

    return {
      ...state,
      comments: [newComment, ...state.comments],
    };
  }
  if (action.type === IS_UPLOADING_VIDEO) {
    return {
      ...state,
      uploading: action.payload,
    };
  }
  if (action.type === SET_UPLOADING_PERCENTAGE) {
    return {
      ...state,
      uploadingPercentage: action.payload,
    };
  }

  return state;
}

export default VideoReducer;
