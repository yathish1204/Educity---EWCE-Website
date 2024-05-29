import React from "react";
import "./Contact.css";
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7422b072-d0cf-4747-b6ec-36639647b7c8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact container" id="contact" >
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque modi
          placeat doloremque quidem dolor minima, odio corporis quae expedita
          ullam. Exercitationem esse quisquam eos minus laboriosam a!
          Consequuntur vel voluptates voluptatum ipsam.
        </p>
        <ul>
            <li><img src={mail_icon} alt="mail icon" />contact@ewce.edu</li>
            <li><img src={phone_icon} alt="phone icon" />0821 434345</li>
            <li><img src={location_icon} alt="location icon" />Major Girish Akshay kumar road, Yelahanka New Town, Bangalore</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label>Name</label>
            <input type="text" name='name' placeholder="Your name here" required />
            <label>Phone Number</label>
            <input type="tel" name='phone number' placeholder="Your phone number here" required />
            <label>Message</label>
            <textarea name="message" rows={6} placeholder="Your message here" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="arrow icon" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
