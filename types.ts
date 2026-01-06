export type Category =
  | "All"
  | "National"
  | "International"
  | "Sports"
  | "Technology"
  | "Business"
  | "Entertainment";

export type Comment = {
  id: string;
  user: string;
  text: string;
  timestamp: string;
};

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
  imageUrl: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  readTime?: number; // in minutes
  comments: Comment[];
}

export interface NewsState {
  articles: Article[];
  filteredArticles: Article[];
  selectedCategory: Category;
  searchQuery: string;
  loading: boolean;
  currentArticle: Article | null;
}

export type NewsAction =
  | { type: "SET_CATEGORY"; payload: Category }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_ARTICLES"; payload: Article[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_CURRENT_ARTICLE"; payload: Article | null }
  | { type: "ADD_COMMENT"; payload: { articleId: string; comment: Comment } };
