import React, { useState } from "react";

function SubmitButton(props) {
    const [Submit, setSubmit] = useState(false);

    const handleSubmit = () => {
        setSubmit((prevState) => !prevState);
    };

    return (
        <button onClick={handleSubmit} disabled={Submit}>
            {Submit ? "제출완료" : "제출하기"}
        </button>
    );
}

export default SubmitButton;
