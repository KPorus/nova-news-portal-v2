import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';

interface FeaturedHeroProps {
  article: Article;
}

const FeaturedHero: React.FC<FeaturedHeroProps> = ({ article }) => {
  return (
    <section id="feature-hero--ts" className="mb-12">
      <Link to={`/article/${article.id}`} className="group relative block w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden">
        {/* Background Image */}
        <div id="feature-bg--ts" className="absolute inset-0">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div id="feature-content--ts" className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-12 md:w-2/3 lg:w-1/2">
          <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Featured Story
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 leading-tight group-hover:text-primary-100 transition-colors">
            {article.title}
          </h1>
          <p className="text-gray-200 text-base md:text-lg mb-4 line-clamp-2 md:line-clamp-3">
            {article.summary}
          </p>
          <div className="flex items-center text-gray-300 text-sm">
            <span className="font-medium text-white">{article.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedHero;
