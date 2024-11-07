import React, { useState } from 'react';
import Comment from './Comment';

function CommentsList() {
    const [comments, setComments] = useState([
        // Example comments
        { id: 1, userImg: 'path/to/image1.jpg', username: 'user1', tag: 'user1', comment: 'This is a comment', timestamp: new Date() },
        { id: 2, userImg: 'path/to/image2.jpg', username: 'user2', tag: 'user2', comment: 'This is another comment', timestamp: new Date() },
    ]);

    const handleDeleteComment = (commentId) => {
        setComments(comments.filter(comment => comment.id !== commentId));
    };

    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
            ))}
        </div>
    );
}

export default CommentsList;
