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

    // useState를 이용해서 name과 cotent값을 추가한다.
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const addComment = () => {
      // const add = {name: "히히히", comment: "아아아앙악!! 리액트!!"}
      // setCommentList([add, ...commentList])

      // comments 배열 name(key)에는 input value(name)
      const addList = {name: name, comment: content}
      // Spread 
      setCommentList([addList, ...commentList]);
      // state 변경 함수에 빈 문자열을 넣어서 input에 작성됐던 내용을 초기화 시킨다.
      // 이름, 댓글을 추가한 뒤에, 빈 문자열이 들어가서 초기화되고, 다시 다른 값을 입력 받는다.
      setName('');
      setContent('');
    }

    // const addComment = () => {
    //       name === '' || content === ''
    //       ? alert('이름과 댓글을 입력하세요.')
    //       : (
    //         (() => {
    //           const addList = { name: name, comment: content };
    //           setCommentList([addList, ...commentList]);
    //           setName('');
    //           setContent('');
    //         })()
    //       );
    //   };
      


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

      {/* onChange 이벤트는 input 요소에서 값이 변경될 때마다 발생한다. 이때 발생한 이벤트를 매개변수 e로 받아온다. */}
      {/* e.target은 이벤트가 발생한 요소(input 요소)
          e.target.value는 input 요소의 값(value 속성)
          setName과 setContent 함수는 각각 input의 value를 state 변수인 name과 content에 업데이트 해준다. */}
      이름 : <input value={name} onChange={(e) => setName(e.target.value)}/>
      댓글 : <input value={content} onChange={(e) => setContent(e.target.value)} />

      {/* <input onChange={(e)=>{setContent(e.target.value)}} /> */}
         {/* {
          content.value == null ? alert('텍스트를 입력하세요') : content
         }  */}
      <button onClick={addComment}>글추가</button>
    </div>
  );
}

export default CommentList;
