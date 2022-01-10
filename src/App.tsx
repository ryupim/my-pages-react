import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopBar from './components/TopBar';
import Blog from './routes/Blog';
import Home from './routes/Home';
import Tech from './routes/Tech';
import Work from './routes/Work';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
