import React, { Component } from "react";
import Content from "./components/Content";

const HomePage =  (props) => {
    return (
      <div>     
      <Content couponsData1={props.couponsData1} headerTag1={props.headerTag1}/>
      </div>
    );    
}



export default HomePage;

