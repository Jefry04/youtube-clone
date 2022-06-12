import axios from 'axios';

const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
const GET_VIDEO_ERROR = 'GET_VIDEO_ERROR';
const GET_VIDEO_LOADING = 'GET_VIDEO_LOADING';
const VIDEO_DETAIL_ERROR = 'VIDEO_DETAIL_ERROR';
const VIDEO_DETAIL_SUCCESS = 'VIDEO_DETAIL_SUCCESS';

const url = process.env.REACT_APP_BACKEND_URI;

const initialState = {
  videos: [],
  loading: false,
  error: null,
  videoDetail: {},
};
export const fetchAllVideos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_LOADING, payload: true });
      const { data } = await axios.get(`${url}videos`);
      dispatch({ type: GET_VIDEO_SUCCESS, payload: data.videos });
    } catch (error) {
      dispatch({ type: GET_VIDEO_ERROR, payload: error });
    }
  };
};

export const fetchVideoDetail = (videoId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_LOADING, payload: true });
      const { data } = await axios.get(`${url}videos/${videoId}`);
      dispatch({ type: VIDEO_DETAIL_SUCCESS, payload: data.video });
    } catch (error) {
      dispatch({ type: VIDEO_DETAIL_ERROR, payload: error });
    }
  };
};
function VideoReducer(state = initialState, action = null) {
  if (action.type === GET_VIDEO_LOADING)
    return {
      ...state,
      loading: action.payload,
    };
  if (action.type === GET_VIDEO_SUCCESS)
    return {
      ...state,
      loading: false,
      videos: action.payload,
      error: null,
    };
  if (action.type === GET_VIDEO_ERROR)
    return {
      ...state,
      loading: false,
      videos: null,
      error: action.payload,
    };

  if (action.type === VIDEO_DETAIL_SUCCESS)
    return {
      ...state,
      loading: false,
      videoDetail: action.payload,
      error: null,
    };
  if (action.type === VIDEO_DETAIL_ERROR)
    return {
      ...state,
      loading: false,
      videoDetail: null,
      error: action.payload,
    };
  return state;
}

export default VideoReducer;
