import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilValue } from 'recoil';
import {user_id} from '../../recoil/AuthAtom';
import './Comments.css'


type CommentsByUser = {
  id: number,
  body: string, 
  rating: number, 
  created_at: string, 
  owner_id: number,
  skin_name: number, 
  skin: number, 
}

const comments : React.FC = () => { 
  const [CommentsList, setCommentsList] = useState<CommentsByUser[]>([]);
  const userID = useRecoilValue<number|undefined>(user_id); 
  useEffect(()=> {
    const fetchData = async () => {
      try {
          const response = await axios.get("http://127.0.0.1:8000/comments/user/" + userID);
          setCommentsList(response.data);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  fetchData();
  }, [])

  return (
    <div className='comments-container'>
      <h1>Your Comments</h1>
      <div className='comments-content-container'>
        <div className='comments-list-container'>
          {CommentsList.map((comment) => (
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
  )
}

export default comments
