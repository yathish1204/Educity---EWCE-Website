import React from "react";
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about container">
      <div className="about-left">
        <img src={about_img} alt="about image" className="about-img" />
        <img src={play_icon} alt="about image" className="play-icon"  onClick={()=>setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          blanditiis explicabo ipsa ab aperiam ipsum quia ullam assumenda neque!
          Ab labore quidem soluta assumenda?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quae
          hic dolore suscipit cum quidem ratione tempore molestiae 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam
          illum enim, ratione autem nemo odit provident culpa itaque, iure
          fugiat, iusto quisquam sed voluptates!
        </p>
      </div>
    </div>
  );
};

export default About;
