import React from "react";
import Comment from "./Comment";
import { useState } from 'react';

const comments = [
    {
        name: "라라라",
        comment: "안녕하세요, 집에 가고싶다.",
    },
    {
        name: "리리리",
        comment: "리액트 재밌다!",
    },
    {
        name: "로로로",
        commenst: "리액트 리액트 리액트",
    },
];

function CommentList(props) {
    const [commentList, setCommentList] = useState(comments);


    const addComment = () => {
      const add = {name: "히히히", comment: "아아아앙악!! 리액트!!"}
      setCommentList([add, ...commentList])
    }

    const deleteComment = (index) => {
        const newCommentList = [...commentList];
        newCommentList.splice(index,1);
        setCommentList(newCommentList);
    };
    
    let [input, setInput] = useState('');

  return (
    <div>
      {
        commentList.map((comment, i) => {
          return (
            <Comment 
                name={comment.name} 
                comment={comment.comment} 
                key={i} 
                onDelete={() => deleteComment(i)}
            />  
          );
        })
      }
      <button onClick={addComment}>리스트 추가</button>
    </div>
  );
}

export default CommentList;
