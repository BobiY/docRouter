import React,{ Component } from "react";
import { render } from "react-dom";
import "../style/index.less";
import Tab from "../component/link";
import ReactCom from "../component/reactCom";
import ReactRouter from "../component/reactRouterCom";
import Redux from "../component/reduxCom";
import Reflux from "../component/refluxCom";
import { Router,Route,hashHistory,IndexRoute } from "react-router";


const app = document.getElementById('app')
class App extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <div className = "warp">
         <div className = "link">
             <Tab />
         </div>
         <div className = "router">
             {this.props.children}
         </div>
      </div>
    )
  }
};

let renderRouter = () => {
  return (
      <Router history = {hashHistory}>
         <Route path = "/" component = {App}>
             <IndexRoute component = {ReactCom} />
             <Route path = "/redux" component = {Redux} />
             <Route path = "/reflux" component = {Reflux} />
             <Route path = "/react-router" component = {ReactRouter} />
         </Route>
      </Router>
  )
}

render(renderRouter(),app);
