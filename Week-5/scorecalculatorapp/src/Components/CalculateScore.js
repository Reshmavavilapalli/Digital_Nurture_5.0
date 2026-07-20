import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const score = ((props.total / props.goal) * 100).toFixed(2);

    return (
        <div className="container">

            <h1>Student Details:</h1>

            <p>
                <span className="label">Name:</span>
                <span className="value">{props.name}</span>
            </p>

            <p>
                <span className="label">School:</span>
                <span className="value">{props.school}</span>
            </p>

            <p>
                <span className="label">Total:</span>
                <span className="value">{props.total}Marks</span>
            </p>

            <p className="score">
                Score:{score}%
            </p>

        </div>
    );
}

export default CalculateScore;