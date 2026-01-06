import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { Article, Category, NewsState, NewsAction } from "../types";
import { MOCK_ARTICLES } from "../constants";

const initialState: NewsState = {
  articles: [],
  filteredArticles: [],
  selectedCategory: "All",
  searchQuery: "",
  loading: true,
  currentArticle: null,
};

const newsReducer = (state: NewsState, action: NewsAction): NewsState => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
        filteredArticles: action.payload,
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_CATEGORY": {
      const category = action.payload;
      console.log("category:", category);
      const filtered =
        category === "All"
          ? state.articles
          : state.articles.filter((a) => a.category === category);
      console.log("filtered data", filtered);
      // Also apply search if exists
      const searchFiltered = state.searchQuery
        ? filtered.filter((a) =>
            a.title.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        : filtered;
      console.log("data:", searchFiltered);
      return {
        ...state,
        selectedCategory: category,
        filteredArticles: searchFiltered,
      };
    }
    case "SET_SEARCH": {
      const query = action.payload;
      const categoryFiltered =
        state.selectedCategory === "All"
          ? state.articles
          : state.articles.filter((a) => a.category === state.selectedCategory);

      const finalFiltered = categoryFiltered.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase())
      );

      return { ...state, searchQuery: query, filteredArticles: finalFiltered };
    }
    case "SET_CURRENT_ARTICLE":
      return { ...state, currentArticle: action.payload };

    case "ADD_COMMENT": 
      const { articleId, comment } = action.payload;
      const updatedArticles = state.articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            comments: [comment, ...(article.comments || [])],
          };
        }
        return article;
      });

      // Recalculate filtered articles to keep them in sync
      const category = state.selectedCategory;
      const filtered =
        category === "All"
          ? updatedArticles
          : updatedArticles.filter((a) => a.category === category);

      const finalFiltered = state.searchQuery
        ? filtered.filter((a) =>
            a.title.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        : filtered;

      return {
        ...state,
        articles: updatedArticles,
        filteredArticles: finalFiltered,
      };
    default:
      return state;
  }
};

const NewsContext = createContext<
  | {
      state: NewsState;
      dispatch: React.Dispatch<NewsAction>;
      getArticleById: (id: string) => Article | undefined;
    }
  | undefined
>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "SET_ARTICLES", payload: MOCK_ARTICLES });
      dispatch({ type: "SET_LOADING", payload: false });
    }, 800); // Fake network delay
  }, []);

  const getArticleById = (id: string) =>
    state.articles.find((a) => a.id === id);

  return (
    <NewsContext.Provider value={{ state, dispatch, getArticleById }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
