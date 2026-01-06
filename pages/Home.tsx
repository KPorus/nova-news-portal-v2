import React from "react";
import { useNews } from "../context/NewsContext";
import FeaturedHero from "../components/News/FeaturedHero";
import NewsCard from "../components/News/NewsCard";
import { TrendingUp } from "lucide-react";
import Loading from "@/components/loader/Loading";

const Home: React.FC = () => {
  const { state } = useNews();
  const { filteredArticles, loading } = state;

  if (loading) {
    return <Loading />;
  }

  // Separate featured article (first one usually, or marked flag)
  const featuredArticle =
    filteredArticles.find((a) => a.isFeatured) || filteredArticles[0];
  // const otherArticles = filteredArticles.filter(a => a.category == featuredArticle?.category);
  const otherArticles = filteredArticles.filter((a) => {
    console.log(state.selectedCategory);
    if (state.selectedCategory == "All") {
      return a.id !== featuredArticle?.id;
    }

    return a.category === featuredArticle?.category;
  });
  const trendingArticles = state.articles
    .filter((a) => a.isTrending)
    .slice(0, 4);
  console.log("filteredarticles", featuredArticle);
  console.log("otherarticles", otherArticles);
  console.log("trending",trendingArticles);
  return (
    <div id="home--ts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Section */}
      {featuredArticle && <FeaturedHero article={featuredArticle} />}

      {/* Main Content Layout */}
      <div id="content--ts" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div id="left-content--ts" className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              {state.selectedCategory === "All"
                ? "Latest Stories"
                : `${state.selectedCategory} News`}
            </h2>
          </div>

          {otherArticles.length > 0 ? (
            <div className="space-y-4">
              {/* First 2 items as big horizontal cards */}
              {otherArticles.slice(0, 2).map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  variant="horizontal"
                />
              ))}

              {/* Remaining grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {otherArticles.slice(2).map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    variant="vertical"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>

        <div id="right-content--ts" className="lg:col-span-4 space-y-8">
          {/* Trending Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-bold font-serif text-slate-900 uppercase tracking-wide">
                Trending Now
              </h3>
            </div>
            <div className="space-y-2">
              {trendingArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  variant="compact"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div id="newsletter-section--ts" className="bg-slate-900 p-8 rounded-xl text-center text-white">
            <h3 className="text-xl font-bold font-serif mb-4">Stay Informed</h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest news and updates delivered directly to your inbox
              every morning.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-primary-500"
            />
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
