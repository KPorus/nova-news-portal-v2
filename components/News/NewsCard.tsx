import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../../types';

interface NewsCardProps {
  article: Article;
  variant?: 'vertical' | 'horizontal' | 'compact';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'vertical' }) => {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  if (variant === 'compact') {
    return (
      <Link id="news-card--ts" to={`/article/${article.id}`} className="group flex gap-4 items-start mb-6 last:mb-0">
         <div className="flex-1">
            <span className="text-xs font-semibold text-primary-600 mb-1 block">{article.category}</span>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-primary-700 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <div className="flex items-center text-xs text-gray-400 mt-2">
              <Clock className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
         </div>
         <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
             <img 
               src={article.imageUrl} 
               alt={article.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
         </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.id}`} className="group grid grid-cols-12 gap-6 items-start border-b border-gray-100 pb-8 mb-8 last:border-0">
        <div className="col-span-12 md:col-span-5 relative overflow-hidden rounded-lg aspect-video bg-gray-200">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col h-full justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center">
                 <Clock className="h-3 w-3 mr-1" /> {date}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-primary-700 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-4">
              {article.summary}
            </p>
            <span className="text-primary-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform w-max">
              Read Story <ArrowRight className="h-4 w-4 ml-1" />
            </span>
        </div>
      </Link>
    );
  }

  // Default Vertical
  return (
    <Link to={`/article/${article.id}`} className="group flex flex-col h-full bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-sm">
                {article.category}
            </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center text-xs text-gray-400 mb-3">
          <Clock className="h-3 w-3 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime} min read</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3 font-serif leading-tight group-hover:text-primary-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {article.summary}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
