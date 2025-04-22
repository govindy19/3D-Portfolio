import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-20 h-20 border-4 border-blue-500 border-opacity-20 border-t-transparent rounded-full animate-spin'/>
      </div>
    </Html>
  );
};

export default Loader;
