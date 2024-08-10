// `components/ui/DynamicPaddingWrapper.tsx`
"use client";
import React from 'react';
import { useDynamicPadding } from '@/components/ui/MacBook-intro/dynamicPadding';

const DynamicPaddingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const paddingTop = useDynamicPadding();

  return (
    <div style={{ paddingTop }}>
      {children}
    </div>
  );
};

export default DynamicPaddingWrapper;
