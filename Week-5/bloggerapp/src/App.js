import React, { Component } from "react";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";


class App extends Component {


  constructor(props){

    super(props);


    this.state={

      showBooks:true,
      showBlogs:false,
      showCourses:true

    };

  }



  render(){


    // Element variable conditional rendering

    let content;


    if(this.state.showBooks){

      content=<BookDetails />;

    }

    else{

      content=<BlogDetails />;

    }



    return(

      <div>


        <h1>
          Blogger Application
        </h1>



        <h2>
          Conditional Rendering Examples
        </h2>



        {/* If else rendering */}

        {content}



        <hr />



        {/* Ternary operator */}

        {

          this.state.showBlogs ?

          <BlogDetails />

          :

          <p>
            Blog component is hidden
          </p>

        }



        <hr />



        {/* Logical AND rendering */}

        {

          this.state.showCourses &&

          <CourseDetails />

        }



      </div>

    );

  }


}


export default App;