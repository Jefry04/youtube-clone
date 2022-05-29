import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import VideoView from './pages/VideoView';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="videoview/:videoId" element={<VideoView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
