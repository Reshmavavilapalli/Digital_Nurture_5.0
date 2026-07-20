import React from "react";


function BookDetails(){


const books=[

{
id:1,
name:"Java Programming",
author:"James Gosling"
},

{
id:2,
name:"React Basics",
author:"Facebook Team"
},

{
id:3,
name:"Python Guide",
author:"Guido"
}

];



return(

<div>


<h2>
Book Details
</h2>


<ul>


{

books.map((book)=>(


<li key={book.id}>


Book Name : {book.name}

<br />

Author : {book.author}


</li>


))

}


</ul>


</div>

);


}


export default BookDetails;