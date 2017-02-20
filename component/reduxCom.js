import React,{ Component } from "react";
import reduxTab from "../json/reduxTab.json";
import tool from "../util/tool.js";

export default class Redux extends Component {
  constructor(props) {
     super()
     this.state = {
          ele:null,
          fun:tool
     };
  }
  loadTab(){
     let li = reduxTab.title.map( (item,index) => <li key = {index} className = "liRedux" onClick = {this.handleClick.bind(this,"aboutRedux")}>{item[Object.keys(item)]}</li> )
     let ul = <ul className = "ulRedux">{li}</ul>;
     return ul
  }
  handleClick(callback){

    this.setState({
       ele:this.state.fun[callback](callback)
    })
  }
  render(){
    return(
      <div className = "redux">
         <div className = "tab">
             {this.loadTab()}
         </div>
         <div className = "content">
             {this.state.ele || "1111" }
         </div>
      </div>
    )
  }
}
