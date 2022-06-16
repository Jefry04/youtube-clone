import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import VideoView from './pages/VideoView';
import UserView from './pages/UserView';
import NotFound from './pages/NotFound';
import { getUerData } from './store/reducers/Auth.reducer';
import VideoResults from './pages/VideoResults';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(getUerData(token));
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="videoview/:videoId" element={<VideoView />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserView />} />
          <Route path="/videos/results" element={<VideoResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
