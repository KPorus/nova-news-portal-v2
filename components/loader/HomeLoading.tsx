import React from "react";
import { SkeletonCard, SkeletonHero } from "../News/SkeletonLoader";

const HomeLoading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SkeletonHero />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeLoading;
