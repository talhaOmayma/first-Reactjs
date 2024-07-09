import React, { Component } from "react";

class Etudiant extends Component {
    constructor(props){
        super(props);
        this.state= {
            nom: 'Karim',
            note:17
        }
    }
    chageState= ()=>{
        this.setState({note : 19})
    }

render(){
    return(
     <div>

        <h2> Hello from the Component class </h2>
        <h3> bonjour {this.state.nom}</h3>
        <p> votre note est : {this.state.note} </p>
        <button onClick={this.chageState}> changer </button>

     </div>
    )
}
}

export default Etudiant;