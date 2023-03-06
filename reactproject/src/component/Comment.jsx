import React from "react";
import './Comment.css'

const styles = {
  wrapper: {
    display: "flex",
    margin: '8px',
    padding: 8,
    border: "1px solid grey",
    borderRadius: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 8,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  commentText: {
    fontSize: 16,
  },
};

// img 사용하는 방법
// 1. 이미지 주소로 삽입
// 2. public 
// 이미지 경로를 참조하는 방법
// 이미지를 사용하는건 jsx파일이지만, public폴더 기준으로 경로 작성
// 3. src
// image를 import 해야함.
// import에서 지정한 변수를 경로 대신 사용할 수 있다.

// css는 public의 이미지를 참조할 수 없다. 
// Css에서 사용하고 싶을 때는 src폴더에 이미지 넣고, 동일하게 사용!

function Comment(props) {
    return (
        <div className="wrapper" style={styles.wrapper} >
            <div className='img-box'>
              <img
                  src="https://www.nicepng.com/png/detail/14-148615_mario-png-high-quality-image-super-mario-run.png"
                  alt="uesr-img"
                  style={styles.image}
              />
            </div>

            <div className='content-container' style={styles.contentContainer}>
                <span className='name-text' style={styles.nameText}>{props.name}</span>
                <span className='commnet-text' style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
