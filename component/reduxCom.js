import React,{ Component } from "react";
import reduxTab from "../json/reduxTab.json";
import tool from "../util/tool.js";
import $ from "jquery";

export default class Redux extends Component {
  constructor(props) {
     super()
     this.state = {
          ele:null,
          fun:tool
     };
  }
  loadTab(){
     let li = reduxTab.title.map( (item,index) => <li key = {index} className = "liRedux" onClick = {this.handleClick.bind(this,"aboutRedux",Object.keys(item))}>{item[Object.keys(item)]}</li> )
     let ul = <ul className = "ulRedux">{li}</ul>;
     return ul
  }
  handleClick(callback,filter){
    this.setState({
       ele:this.state.fun[callback](filter)
    })
  }
  componentDidMount(){
    $($(".liRedux")[0]).addClass("active");
    $(".liRedux").click(function(){
       $(this).siblings().removeClass("active");
       $(this).addClass("active");
    })
  }
  render(){
    return(
      <div className = "redux">
         <div className = "tab">
             {this.loadTab()}
         </div>
         <div className = "content">
             {this.state.ele || this.state.fun["aboutRedux"](["aboutRedux"]) }
         </div>
      </div>
    )
  }
}
