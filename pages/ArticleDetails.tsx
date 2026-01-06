import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNews } from "../context/NewsContext";
import {
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { SkeletonArticleDetrailCard } from "@/components/News/SkeletonLoader";
import NotFound from "./NotFound";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getArticleById, state } = useNews();
  const [article, setArticle] = useState(getArticleById(id || ""));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      const found = getArticleById(id || "");
      setArticle(found);
      setLoading(false);
    }, 400);
  }, [id, state.articles]);

  if (loading) {
    return <SkeletonArticleDetrailCard />;
  }

  if (!article) {
    return <NotFound />;
  }

  return (
    <div id="article-page--ts" className="bg-white min-h-screen pb-12">
      {/* Breadcrumb / Back */}
      <div
        id="article-breadcrumb--ts"
        className="max-w-4xl mx-auto px-4 pt-8 pb-4"
      >
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to News
        </Link>
      </div>

      <article
        id="article-main--ts"
        className="max-w-4xl mx-auto px-4"
        aria-labelledby="article-title"
      >
        {/* Article Header */}
        <header id="article-header--ts" className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {article.category}
            </span>
            <span className="text-gray-400 text-sm">
              {article.readTime} min read
            </span>
          </div>

          <h1
            id="article-title--ts"
            className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight"
          >
            {article.title}
          </h1>

          <div
            id="article-meta--ts"
            className="flex items-center justify-between border-y border-gray-100 py-4"
          >
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {article.author}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString(
                      undefined,
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div id="article-actions--ts" className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-primary-600 transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-blue-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div id="article-hero--ts" className="mb-10 rounded-xl overflow-hidden shadow-sm">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <p className="text-sm text-gray-500 mt-2 text-right italic px-1">
            Image source: Picsum
          </p>
        </div>

        {/* Content Body */}
        <div
          id="article-content--ts"
          className="prose prose-lg prose-slate max-w-none font-serif"
        >
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Tags / Footer of Article */}
        <div
          id="article-share--ts"
          className="mt-12 pt-8 border-t border-gray-100"
        >
          <h4 className="text-sm font-bold uppercase text-gray-400 mb-4">
            Share this story
          </h4>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded hover:bg-blue-700 transition-colors">
              <Facebook className="h-4 w-4" /> Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded hover:bg-blue-500 transition-colors">
              <Twitter className="h-4 w-4" /> Twitter
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetails;
