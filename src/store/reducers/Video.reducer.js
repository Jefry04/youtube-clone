import axios from 'axios';

const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
const GET_VIDEO_ERROR = 'GET_VIDEO_ERROR';
const GET_VIDEO_LOADING = 'GET_VIDEO_LOADING';
const VIDEO_DETAIL_SUCCESS = 'VIDEO_DETAIL_SUCCESS';
const VIDEO_FILTER_SUCCESS = 'VIDEO_FILTER_SUCCESS';
const SEARCH_DATA = 'SEARCH_DATA';
const HAS_FILTER_VIDEO = 'HAS_FILTER_VIDEO';

const url = process.env.REACT_APP_BACKEND_URI;

const initialState = {
  videos: [],
  loading: false,
  error: null,
  videoDetail: {},
  filtersVideo: [],
  searchData: '',
  hasFilterVideos: false,
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

export const fetchFilterVideos = (searchData) => {
  const paramsObject = {
    search: searchData,
    page: 1,
    limit: 2,
  };
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_LOADING, payload: true });
      const { data } = await axios.get(`${url}videos/results`, {
        params: paramsObject,
      });
      dispatch({ type: VIDEO_FILTER_SUCCESS, payload: data.results });
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
      dispatch({ type: GET_VIDEO_ERROR, payload: error });
    }
  };
};

export function actionSearchData(payload) {
  return { type: SEARCH_DATA, payload };
}

export function actionHasFilterVideo(payload) {
  return { type: HAS_FILTER_VIDEO, payload };
}
function VideoReducer(state = initialState, action = null) {
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
      videos: action.payload,
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
  if (action.type === VIDEO_DETAIL_SUCCESS)
    return {
      ...state,
      loading: false,
      videoDetail: action.payload,
      error: null,
    };
  if (action.type === VIDEO_FILTER_SUCCESS)
    return {
      ...state,
      loading: false,
      filtersVideo: action.payload,
      error: null,
    };
  return state;
}

export default VideoReducer;
