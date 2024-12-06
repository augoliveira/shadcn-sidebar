'use client';

import { DotLoader } from 'react-spinners';

import Box from '../components//ui/Box';

const Loading = () => {
  return (
    <Box className="flex h-full items-center justify-center">
      <DotLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default Loading;