import React from "react";
import content from "../json/reduxContent.json"
 //data ==> 需要渲染哪一个选项卡的东西
 //content.content


 function aboutRedux(filter) {
     const text = content.content;
     let currentContent = text.filter( item => {
        let temKey = Object.keys(item);
        let aa = temKey.filter( val => val == filter );
        return aa[0] === filter;
     } )
     let bb = currentContent[0][filter].map( item => {
           let itemTitle = Object.keys(item);
           let ele = itemTitle.map( val => {
               let mark = val.substring(0,2);
               return handle(mark,item[val])
           } )
           return ele;
     } )
     return bb
 }

function handle(str,con) {
  switch(str){
    case "h3":
         return <h3>{con}</h3>;
    case "h4":
        return <h4>{con}</h4>;
    case "ul":
        return <ul>{list(con)}</ul>;
    case "image":
        return <img />;
    default:
        return <p>{con}</p>
  }

}

function list(date){
  return date.map( (item,index) => <li key = {index}>{item}</li> )
}














export default { aboutRedux };
