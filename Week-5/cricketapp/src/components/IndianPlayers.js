import React from "react";

function IndianPlayers(){


    const players = [
        "Rohit",
        "Virat",
        "Dhoni",
        "Rahul",
        "Jadeja",
        "Pant"
    ];


    // Destructuring ES6

    const [player1,player2,player3,...remaining] = players;


    const oddTeamPlayers=[
        player1,
        player3,
        remaining[1]
    ];


    const evenTeamPlayers=[
        player2,
        remaining[0],
        remaining[2]
    ];



    // Merge feature of ES6

    const T20players=[
        "Rohit",
        "Virat",
        "Hardik"
    ];


    const RanjiPlayers=[
        "Rahul",
        "Jadeja",
        "Pant"
    ];


    const allPlayers=[
        ...T20players,
        ...RanjiPlayers
    ];


    return(

        <div>

            <h2>Indian Players</h2>


            <h3>Odd Team Players</h3>

            <ul>
                {
                    oddTeamPlayers.map(
                        (p)=><li>{p}</li>
                    )
                }
            </ul>


            <h3>Even Team Players</h3>

            <ul>
                {
                    evenTeamPlayers.map(
                        (p)=><li>{p}</li>
                    )
                }
            </ul>


            <h3>Merged Players (T20 + Ranji)</h3>

            <ul>
                {
                    allPlayers.map(
                        (p)=><li>{p}</li>
                    )
                }
            </ul>

        </div>
    )

}

export default IndianPlayers;