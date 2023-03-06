import React from "react";
import Comment from "./Comment";

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
    return (
        <div>
            {comments.map((comment, i) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} key={i}/>
                );
            })}
        </div>
    );
}

export default CommentList;
