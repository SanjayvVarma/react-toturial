import { useState } from 'react';

const CommentsTree = ({ comments, addComment, deleteComment }) => {
  const [showInput, setShowInput] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleAdd = (commentId) => {
    if (commentText) {
      addComment(commentId, commentText);
      setShowInput('');
    }
    setCommentText('');
  };

  const cancelReply = () => {
    setShowInput('');
    setCommentText('');
  };

  return (
    comments?.map((comment) => (
      <div key={comment.id} className="mb-2">
        <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-2 border-l-4 border-blue-500">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt={comment.text}
            className="w-12 h-12 mr-4 rounded-full"
          />
          <div>
            <p>{comment.text}</p>
            {
              showInput === comment.id && (
                <input
                  type="text"
                  placeholder="Reply....."
                  autoFocus
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="border border-gray-300 rounded px-2 mt-2 w-full"
                />
              )
            }
            {
              showInput === comment.id ? (
                <div className="mt-2 flex gap-4">
                  <button onClick={() => handleAdd(comment.id)}> Add </button>
                  <button onClick={cancelReply}> Cancel </button>
                </div>
              ) : (
                <div className="mt-2 flex gap-4">
                  <button onClick={() => setShowInput(comment.id)}> Reply </button>
                  <button onClick={() => deleteComment(comment.id)}> Delete </button>
                </div>
              )
            }
          </div>
        </div>

        <div className="ml-4 pl-4 border-l-2 border-gray-200">
          <CommentsTree
            comments={comment.replies}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    ))
  );
};

export default CommentsTree;
