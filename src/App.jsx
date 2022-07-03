import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { getUerData } from './store/reducers/Auth.actionCreator';
import RecoverPassword from './components/RecoverPassword';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import VideoView from './pages/VideoView';
import VideoResults from './pages/VideoResults';
import ProtectedRoute from './components/ProtectedRoute';
import Response from './pages/Response';

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
          <Route path="videoview/:videoId" element={<VideoView />}>
            <Route path=":redirect" component={<VideoView />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route path="/videos/results" element={<VideoResults />} />
          <Route path="/response" element={<Response />}>
            <Route path=":redirect" component={<Response />} />
          </Route>
          <Route
            path="/recover-password/:token"
            element={<RecoverPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
