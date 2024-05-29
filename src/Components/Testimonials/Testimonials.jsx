import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../Assets/next-icon.png";
import back_icon from "../../Assets/back-icon.png";
import user_1 from "../../Assets/user-1.png";
import user_2 from "../../Assets/user-2.png";
import user_3 from "../../Assets/user-3.png";
import user_4 from "../../Assets/user-4.png";

const Testimonials = () => {
    const slider=useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
}
const slideBackward = () =>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
}
    

  return (
    <div className="testimonials container" id="testimonials">
      <img src={back_icon} alt="" className="backBtn" onClick={slideBackward} />
      <img src={next_icon} alt="" className="nextBtn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider} >
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="testimonial 1" />
                <div>
                  <h3>Harshitha </h3>
                  <span>Aeronautical Engineer, 2nd Year</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="testimonial 1" />
                <div>
                  <h3>Praveen Kumar Nain</h3>
                  <span>Computer Science Engineer, Alumini</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="testimonial 1" />
                <div>
                  <h3>Hajira Bhanu</h3>
                  <span>Computer Science Engineer, Alumini</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="testimonial 1" />
                <div>
                  <h3>Syed Inayath</h3>
                  <span>Computer Science Engineer, Alumini</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li>
          {/* <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="testimonial 1" />
                <div>
                  <h3>Shubham Limje</h3>
                  <span>Mechanical Engineer, Alumini</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="testimonial 1" />
                <div>
                  <h3>Yathish Shettigar</h3>
                  <span>Computer Science Engineer, Alumini</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sint perspiciatis expedita totam excepturi impedit vitae? Vel
                voluptates laboriosam quidem quo numquam minima quisquam!
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
