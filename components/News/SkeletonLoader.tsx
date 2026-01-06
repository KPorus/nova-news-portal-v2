import React from 'react';

export const SkeletonHero = () => (
  <div className="w-full h-[500px] bg-gray-200 rounded-xl animate-pulse mb-12"></div>
);

export const SkeletonCard = () => (
  <div id="skeleton--ts" className="flex flex-col bg-white rounded-lg overflow-hidden h-full">
    <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
    <div className="p-5 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
      <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-full animate-pulse mt-4"></div>
    </div>
  </div>
);
