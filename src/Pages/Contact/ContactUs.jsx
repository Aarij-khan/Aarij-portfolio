/* eslint-disable react/prop-types */
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import Button from "../../Components/Common/Button/Button";
import "./ContactUs.css";
import "./responsive.css"
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactUs = ({data}) => {
  const {heading1, span, heading2, description, email, contactNo} = data;
  return (
    <section id="contact" className="contactUs">
      <div className="container">
        <div className="contactUs_wrapper">
            <div className="form-wrapper">
              <form>
                <ul>
                  <li><Button text="Get in Touch"/></li>
                  <li><a href="https://github.com/Aarij-khan"><FaGithub /></a></li>
                   <li><a href="https://www.linkedin.com/in/aarij-raza-146364328"><FaLinkedin /></a></li>
                    <li><a href="mailto:aarij502@gmail.com"><SiGmail /></a></li>
                    <li><a href="https://wa.me/+923282183869"><FaPhoneAlt /></a></li>
                </ul>
              </form>
            </div>

            <div className="content-wrapper">
              <h3>{heading1} <span>{span}</span> {heading2}</h3>
              <p>{description}</p>
              <h5>{email}</h5>
              <h5>{contactNo}</h5>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
