import React, { Component } from "react";

class Data extends Component{
    constructor(props){
        super(props);
        this.state= {
            users:[]
        }
    }

//http Request
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => this.setState({users: result}))
}
render(){
    console.log(this.state.users)
    return(
        <div>
        <h2> Liste Users from API </h2>
        {
        this.state.users.map((user,index)=>{
            return(
                <>
            <p> {user.name}</p>
            <p> {user.phone}</p>
            <p> {user.email}</p>
            <hr />
            </>
        ) })
        
    }
      </div>)
}
}
export default Data;