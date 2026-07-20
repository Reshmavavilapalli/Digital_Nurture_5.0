import React from "react";

function App() {

  // Creating office objects
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },

    {
      name: "Google",
      rent: 75000,
      address: "Hyderabad"
    },

    {
      name: "Microsoft",
      rent: 90000,
      address: "Bangalore"
    },

    {
      name: "TCS",
      rent: 45000,
      address: "Vizag"
    }
  ];


  return (

    <div>

      {/* Heading using JSX */}
      <h1>
        Office Space Rental Application
      </h1>


      {/* Image Attribute */}
      <img
        src="https://via.placeholder.com/200"
        alt="Office Space"
        width="200"
      />


      <h2>
        Available Office Spaces
      </h2>


      {/* Displaying office details using map() */}

      {
        offices.map((office) => (

          <div key={office.name}>

            <h3>
              {office.name}
            </h3>


            <p>
              Address : {office.address}
            </p>


            {/* Conditional Inline CSS */}

            <p
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >

              Rent : ₹{office.rent}

            </p>


            <hr />

          </div>

        ))
      }


    </div>

  );
}


export default App;