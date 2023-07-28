import axios from "axios";
import "./viewrecipe.css";
import React, { Component } from "react";
class ViewRecipe extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      
      <div className="showans">
        <div></div>
        {this.state.data.map(user => (
          <div className="div" key={user.rollno}>
            <div className="lab1"><h1 className="tabcon">recipename:{user.recipename}</h1></div>
            <img
                src={user.imageurl}
                alt="recipe"
                width="192"
                height="262"
                
              />
            <div className="lab1"><h1 className="tabcon">ingredients:{user.ingredients}</h1></div>
            <div className="lab1"><h1 className="tabcon">instruction:{user.instruction}</h1></div>
          </div>
        ))}
      </div>
    
    // <>
    // <div className="stdbox">
    //   <label for="rollno">RollNo</label>
      
    // </div>
    // </>
    );
  }}
  
export default ViewRecipe;