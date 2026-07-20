import React from "react";


function BlogDetails(){


const blogs=[

{
id:1,
title:"React Introduction",
content:"Learn JSX and Components"
},


{
id:2,
title:"JavaScript ES6",
content:"Learn Arrow Functions"
},


{
id:3,
title:"Node JS",
content:"Backend Development"
}

];



return(

<div>


<h2>
Blog Details
</h2>


{

blogs.map((blog)=>(


<div key={blog.id}>


<h3>
{blog.title}
</h3>


<p>
{blog.content}
</p>


<hr/>


</div>


))

}


</div>

);


}


export default BlogDetails;