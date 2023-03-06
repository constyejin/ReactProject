import React from "react";

const styles = {
    wrapper: {
        margin: '8px',
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

// img 사용하는 방법
// 1. 이미지 주소로 삽입
// 2. 

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div>
                <img
                    src="https://www.nicepng.com/png/detail/14-148615_mario-png-high-quality-image-super-mario-run.png"
                    alt="uesr-img"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
