import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Post from './page/Post/index';
import Type from './page/Type';
import Upload from './page/Upload';

function App() {
  return (
    <div className="bg-[#2c2f33] h-[100vh] w-full overflow-hidden relative flex">
      <Navbar />
      <div className="flex-1">
        <Routes>
          {/* type cannot open */}
          <Route path="/" element={<Post />} />
          <Route path="/:id" element={<Post />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
