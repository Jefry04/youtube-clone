/* eslint-disable no-underscore-dangle */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import ButtonAction from './ButtonAction';
import {
  actionHasFilterVideo,
  fetchAllVideos,
  fetchFilterVideos,
} from '../store/reducers/Video.actionCreators';

function VideoGrid() {
  const { labels } = useSelector((state) => state.LayoutReducer);
  const { hasFilterVideos, filtersVideo, videos, loading, hasMore } =
    useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();

  // const observer = useRef();
  // const lastBookElementRef = useCallback(
  //   (node) => {
  //     console.log(node);
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  const handleCLick = (labelName) => {
    dispatch(fetchFilterVideos(labelName));
    dispatch(actionHasFilterVideo(true));
  };

  const handleNext = () => {
    setTimeout(() => {
      console.log('fetch more data');
    }, 500);
  };
  const handleAllVideos = () => dispatch(actionHasFilterVideo(false));

  return (
    <>
      <div className="filter">
        <div className="filter__container">
          <ButtonAction
            content="Todos"
            className="btn-action--filter"
            handleClick={handleAllVideos}
          />
          {labels?.map((label) => (
            <ButtonAction
              key={label._id}
              content={label.name}
              className="btn-action--filter"
              handleClick={() => handleCLick(label.name)}
            />
          ))}
        </div>
      </div>
      {hasFilterVideos ? (
        <div className="card__container">
          {filtersVideo && filtersVideo.map((video) => <Card video={video} />)}
        </div>
      ) : (
        <div className="card__container">
          {
            videos &&
              // <InfiniteScroll
              //   dataLength={videos.length}
              //   next={handleNext}
              //   hasMore={hasMore}
              //   loader={<h4>Loading...</h4>}
              //   endMessage={
              //     <p style={{ textAlign: 'center' }}>
              //       <b>Yay! You have seen it all</b>
              //     </p>
              //   }
              // >
              videos.map((video) => <Card key={video.id} video={video} />)
            // </InfiniteScroll>
          }
        </div>
      )}
    </>
  );
}

export default VideoGrid;
