import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import { NewsProvider } from "./context/NewsContext";
import NotFound from "./pages/NotFound";


const App: React.FC = () => {
  return (
    <NewsProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NewsProvider>
  );
};

export default App;
