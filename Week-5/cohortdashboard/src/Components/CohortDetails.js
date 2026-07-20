import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h2>{props.code}</h2>

            <h3
                style={{
                    color:
                        props.status === "ongoing"
                            ? "green"
                            : "blue"
                }}
            >
                {props.status}
            </h3>

            <dl>

                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>

                <dt>Coach</dt>
                <dd>{props.coach}</dd>

                <dt>Start Date</dt>
                <dd>{props.startDate}</dd>

                <dt>Current Week</dt>
                <dd>{props.week}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;