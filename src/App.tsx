import React from 'react';
import './App.css';

import Title from './components/Title';
import { Input } from './components/InputContainer';

function App() {
  return (
    <div className='items-center'>
      <Title />
      <Input />
    </div>
  );
}

export default App;
