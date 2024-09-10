// import initialData from './data';
import React, { useState } from 'react';
import CommentsTree from './CommentsTree';

const NestedComments = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const addComment = (commentId, text) => {
        if (!text.trim()) return; 
    
        setComments(prevState => {
            
            if (commentId === '') {
                
                return [
                    { id: Date.now(), text, replies: [] },
                    ...prevState
                ];
            } else {
                return addCommentsToTree(prevState, commentId, text);
            }
        });
    };

    const deleteComment = (commentId) => {
        setComments((state) => deleteCommentFromTree(state, commentId));
    };


    return (
        <div className='mx-5'>
            <h1 className="text-2xl font-bold mb-4">Comments</h1>

            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Add comment....."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2"
                />

                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    onClick={() => {
                        addComment('', commentText);
                        setCommentText('');
                    }}

                >
                    Add
                </button>
            </div>

            <CommentsTree comments={comments} addComment={addComment} deleteComment={deleteComment} />
        </div>
    );
};

export default NestedComments;


//utility function

const addCommentsToTree =   (tree, commentId, text) => {
    return tree.map(node => {
        if (node.id === commentId) {
            return {
                ...node,
                replies: [
                    { id: Date.now(), text, replies: [] },
                    ...node.replies
                ]
            };
        }
        return {
            ...node,
            replies: addCommentsToTree(node.replies, commentId, text)
        };
    });
};

const deleteCommentFromTree = (tree, commentId) => {
    return tree
        .map(comment => ({
            ...comment,
            replies: deleteCommentFromTree(comment.replies, commentId)
        }))
        .filter(comment => comment.id !== commentId);
};