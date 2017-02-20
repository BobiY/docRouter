import React,{ Component } from "react";
import { Link,IndexLink } from "react-router";
import "../style/index.less";
export default class Tab extends Component {
  constructor(props) {
     super();
  }
  render(){
    return(
      <div>
          <IndexLink to = "/" activeStyle = {{color:"red"}} className = "linkItem"> react </IndexLink>
          <Link to = "/redux" activeStyle = {{color:"red"}} className = "linkItem"> redux </Link>
          <Link to = "/reflux" activeStyle = {{color:"red"}} className = "linkItem"> reflux </Link>
          <Link to = "/react-router" activeStyle = {{color:"red"}} className = "linkItem"> react-router </Link>
      </div>
    )
  }
};
