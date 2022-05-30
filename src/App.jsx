import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import VideoView from './pages/VideoView';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="videoview/:videoId" element={<VideoView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
