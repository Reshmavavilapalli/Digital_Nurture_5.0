import React, { Component } from "react";


class CurrencyConvertor extends Component {


    constructor(props){

        super(props);


        this.state={

            rupees:"",
            euro:0

        };

    }



    handleChange = (event)=>{


        this.setState({

            rupees:event.target.value

        });


    }



    handleSubmit = ()=>{


        let euroValue = this.state.rupees * 0.011;


        this.setState({

            euro:euroValue

        });


    }



    render(){


        return(

            <div>


                <h2>
                    Currency Converter
                </h2>



                <input

                type="number"

                placeholder="Enter Rupees"

                onChange={this.handleChange}

                />



                <button onClick={this.handleSubmit}>

                    Convert

                </button>



                <h3>

                    Euro Value : {this.state.euro}

                </h3>


            </div>

        );

    }


}


export default CurrencyConvertor;