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
        comment: "리액트 리액트 리액트",
    },
];

function CommentList(props) {
    const [commentList, setCommentList] = useState(comments);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const addComment = () => {
      // const add = {name: "히히히", comment: "아아아앙악!! 리액트!!"}
      // setCommentList([add, ...commentList])

      const add = {name: name, comment: content}
      setCommentList([add, ...commentList]);
      setName('');
      setContent('');
    }

    const deleteComment = (index) => {
        const newCommentList = [...commentList];
        newCommentList.splice(index,1);
        setCommentList(newCommentList);
    };
    

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

      이름 : <input value={name} onChange={(e) => setName(e.target.value)}></input>
      댓글 : <input value={content} onChange={(e) => setContent(e.target.value)} />

      {/* <input onChange={(e)=>{setInput(e.target.value)}} /> */}
        {/* {
          input.value == null ? alert('텍스트를 입력하세요') : input
        } */}
      <button onClick={addComment}>글추가</button>
    </div>
  );
}

export default CommentList;
