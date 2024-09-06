import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { user_id } from '../../recoil/AuthAtom';
import './Comments.css';

type CommentsByUser = {
  id: number;
  body: string;
  rating: number;
  created_at: string;
  owner_id: number;
  skin_name: string;
  skin: number;
};

const Comments: React.FC = () => {
  const [commentsList, setCommentsList] = useState<CommentsByUser[]>([]);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [newBody, setNewBody] = useState<string>('');
  const [newRating, setNewRating] = useState<string>('');
  const userID = useRecoilValue<number | undefined>(user_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/comments/user/${userID}`);
        setCommentsList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userID]);

  const handleUpdate = async (id: number, skin_id: number) => {
    try {
      await axios.put(`http://127.0.0.1:8000/comments/user/${userID}/${id}/`, {
        skin: skin_id,
        body: newBody,
        rating: Number(newRating),
      });
      setCommentsList((prevComments) =>
        prevComments.map((comment) =>
          comment.id === id ? { ...comment, body: newBody, rating: Number(newRating) } : comment
        )
      );
      setEditingCommentId(null);
      setNewBody('');
      setNewRating('');
      window.location.reload();
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDelete = async (id:number) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/comments/user/${userID}/${id}/`);
      window.location.reload();
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  }

  return (
    <div className='comments-container'>
      <h1>My Comments</h1>
      <div className='comments-content-container'>
        <div className='comments-list-container'>
          {commentsList.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className='image-container'>
                <img className='skin-img' src="https://placehold.co/100" alt="" />
              </div>
              <div className='comment-body'>
                <p className='skin-name comment'>{comment.skin_name}</p>
                <p className='skin-rating comment'>Rating: {comment.rating}</p>
                <p className='reviewed-date comment'>Date: {new Date(comment.created_at).toLocaleDateString()}</p>
                <p className='skin-body comment'>Comment: {comment.body}</p>
              </div>
              <div className='mod-button-container'>
                <button
                  onClick={() => setEditingCommentId(comment.id)}
                  className='update-button'
                >
                  Update
                </button>
                <button onClick={() => handleDelete(comment.id)} className='delete-button'>Delete</button>
              </div>
              {editingCommentId === comment.id && (
                <div className="input-container">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleUpdate(comment.id, comment.skin);
                    }}
                  >
                    <input
                      onChange={(e) => setNewBody(e.target.value)}
                      type="text"
                      placeholder="Enter new review"
                      required
                    />
                    <input
                      onChange={(e) => setNewRating(e.target.value)}
                      type="text"
                      placeholder="Enter new rating"
                      required
                    />
                    <input type="submit" />
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='pagination'>
          <div className='pagination-item'>1</div>
          <div className='pagination-item'>2</div>
          <div className='pagination-item'>3</div>
          <div className='pagination-item'>4</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
