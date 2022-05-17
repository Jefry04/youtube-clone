import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import VideoShow from './pages/VideoShow';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/videoshow" element={<VideoShow />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
