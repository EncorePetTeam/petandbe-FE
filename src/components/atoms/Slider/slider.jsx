import React, { Component } from "react";
import Slider from "react-slick";
import styles from './slider.module.scss'

function SimpleSlider (){
  const settings = {
    dots: true, //점은 안보이게
    infinite: true,//무한반복
    speed: 500,
    slidesToShow: 4,//4장 보이게 해주세요
    slidesToScroll: 1//1장씩 넘어가세요
  };
  return(
 
  );
}export {SimpleSlider}



// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
    
//     );
//   }
// }