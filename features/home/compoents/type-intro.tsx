'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypeIntro = () => {
  return (
    <TypeAnimation
      className="text-2xl md:text-5xl tracking-widest"
      sequence={[
        500,
        '一名后端开发工程师 。',
        1000,
        'A Server <Developer /> .',
        1000,
      ]}
      speed={10}
      repeat={Infinity}
    />
  );
};
