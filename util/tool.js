import React from "react";
import content from "../json/reduxContent.json"
 //data ==> 需要渲染哪一个选项卡的东西
 //content.content

//主要处理渲染视图函数
 function aboutRedux(filters) {
     let filter = filters[0];
     const text = content.content;
     let currentContent = text.filter( item => {
        let temKey = Object.keys(item);
        let aa = temKey.filter( val => val == filter );
        return aa[0] === filter;
     } );
     let finllyEle = currentContent[0][filter].map( item => {
           let itemTitle = Object.keys(item);
           let ele = itemTitle.map( val => {
               let mark = val.substring(0,2);
               return handle(mark,item[val])
           } )
           return ele;
     } )

     return finllyEle;
 }

//具体化标签渲染函数
function handle(str,con) {
  switch(str){
    case "h3":
         return <h3 className = "h3">{con}</h3>;
    case "h4":
        return <h4 className = "h4">{con}</h4>;
    case "ul":
        return <ul className = "ul">{list(con)}</ul>;
    default:
        return p(con);
  }

}

//列表渲染函数
function list(date){
  return date.map( (item,index) => <li key = {index}>{item}</li> )
}

//处理多段落
function p(con) {
   let pMark = con.map( (val) =>  {
       if(Object.keys(val)[0] === "image"){
          const url =  val[Object.keys(val)[0]];
          const src =  require("file-loader!../" + url);
          return <img src = {src} className = "img"/>
       }
          return <p className = "p">{val[Object.keys(val)[0]]}</p>
   });
    return pMark;
}
//














export default { aboutRedux };
