import React from 'react';
import { CheckIcon } from '../icons/Check';

const Title: React.FC = () => {
  return (
    <div className='flex items-center justify-center m-2 flex-col'>
      <div className='p-3 justify-between flex'>
        <CheckIcon /> <span className='ml-1 text-2xl font-bold'>My Todo-s</span>
      </div>
    </div>
  );
};

export default Title;
