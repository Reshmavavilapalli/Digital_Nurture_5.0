import React, { Component } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";


class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }


  // Method to increase counter

  increment = () => {

    this.setState({
      counter: this.state.counter + 1
    });

  }



  // Method to decrease counter

  decrement = () => {

    this.setState({
      counter: this.state.counter - 1
    });

  }



  // Multiple methods called by Increase button

  sayHello = () => {

    alert("Hello! Welcome to React Event Handling");

  }



  increaseCounter = () => {

    this.increment();
    this.sayHello();

  }



  // Function with argument

  sayWelcome = (message) => {

    alert(message);

  }



  // Synthetic Event

  handleClick = (event) => {

    alert("I was clicked");

    console.log(event);

  }



  render() {


    return (

      <div>

        <h1>
          React Event Examples
        </h1>



        <h2>
          Counter : {this.state.counter}
        </h2>



        <button onClick={this.increaseCounter}>
          Increase
        </button>



        <button onClick={this.decrement}>
          Decrement
        </button>



        <br />
        <br />



        <button 
        onClick={() => this.sayWelcome("welcome")}
        >

          Say Welcome

        </button>



        <br />
        <br />



        <button onClick={this.handleClick}>

          OnPress

        </button>



        <br />
        <br />



        <CurrencyConvertor />


      </div>

    );

  }

}


export default App;