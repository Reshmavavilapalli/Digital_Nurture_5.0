import React from "react";

function ListofPlayers() {

    const players = [
        {name:"Virat Kohli", score:95},
        {name:"Rohit Sharma", score:85},
        {name:"KL Rahul", score:65},
        {name:"Hardik Pandya", score:75},
        {name:"Ravindra Jadeja", score:55},
        {name:"MS Dhoni", score:90},
        {name:"Rishabh Pant", score:60},
        {name:"Shubman Gill", score:80},
        {name:"Bumrah", score:88},
        {name:"Shami", score:68},
        {name:"Siraj", score:72}
    ];


    // Using map() ES6 feature
    const playerList = players.map((player)=>(
        <li key={player.name}>
            {player.name} - {player.score}
        </li>
    ));


    // Filtering players below 70 using arrow function
    const lowScorePlayers = players.filter(
        (player)=>player.score < 70
    );


    return(
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>
            <ul>
                {playerList}
            </ul>


            <h3>Players with Score Below 70</h3>

            <ul>
                {
                    lowScorePlayers.map((player)=>(
                        <li key={player.name}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;