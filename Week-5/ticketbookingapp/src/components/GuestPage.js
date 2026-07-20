import React from "react";


function GuestPage(){


    const flights=[

        {
            name:"Air India",
            from:"Vizag",
            to:"Delhi"
        },

        {
            name:"Indigo",
            from:"Hyderabad",
            to:"Mumbai"
        },

        {
            name:"SpiceJet",
            from:"Chennai",
            to:"Bangalore"
        }

    ];



    return(

        <div>


            <h2>
                Welcome Guest User
            </h2>


            <h3>
                Available Flights
            </h3>


            {

                flights.map((flight)=>(


                    <div key={flight.name}>


                        <p>
                            Flight : {flight.name}
                        </p>


                        <p>
                            From : {flight.from}
                        </p>


                        <p>
                            To : {flight.to}
                        </p>


                        <hr />

                    </div>


                ))

            }



            <p>
                Please Login to Book Tickets
            </p>


        </div>

    );

}


export default GuestPage;