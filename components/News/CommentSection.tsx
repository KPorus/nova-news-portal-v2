import React from "react";
import { MessageSquare, Send, User } from "lucide-react";
import { Comment } from "@/types";


type CommentSectionProps = {
  comments: Comment[];
  commentsCount: number;
  newComment: string;
  setNewComment: (value: string) => void;
  handleAddComment: () => void;
};

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  commentsCount,
  newComment,
  setNewComment,
  handleAddComment,
}) => {
  return (
    <section id="comment-section--ts" className="mt-16 pt-12 border-t border-gray-100 bg-gray-50 -mx-4 px-4 sm:mx-0 sm:rounded-xl sm:p-8">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="h-6 w-6 text-primary-600" />
        <h3 className="text-2xl font-bold font-serif text-slate-900">
          Comments ({commentsCount})
        </h3>
      </div>

      {/* New Comment Input */}
      <div id="new-comment--ts" className="mb-10">
        <div className="bg-white rounded-lg border border-gray-200 p-4 focus-within:ring-2 focus-within:ring-primary-500 transition-all shadow-sm">
          <textarea
            className="w-full bg-transparent border border-gray-200 rounded-lg focus:border-primary-500 focus:ring-0 text-slate-800 placeholder-gray-400 resize-none h-28 px-4 py-3 pr-10"
            placeholder="Join the conversation..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end mt-3">
            <button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary-700 disabled:opacity-50 transition-all"
            >
              <Send className="h-4 w-4" /> Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div id="comment-content--ts" className="space-y-8">
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {comment.user}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {comment.text}
                </p>
                <div className="mt-2 flex gap-4">
                  <button className="text-xs font-semibold text-gray-500 hover:text-primary-600 transition-colors">
                    Like
                  </button>
                  <button className="text-xs font-semibold text-gray-500 hover:text-primary-600 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
