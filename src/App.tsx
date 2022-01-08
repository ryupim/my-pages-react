import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/posts" component={Posts} />
              <Route exact path="/new-post" component={NewPost} />
              <Route render={() => <h1>Home</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
