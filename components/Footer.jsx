import React from "react";
import logo from "../images/logo.png";
import {
  IconMail,
  IconPhoneCall,
  IconLocation,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
export default function Footer() {
  return (
    <div>
      <section className="footer" id="footer-section">
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li className="logo">
                <span>Argenta Health</span> Care Solutions
              </li>
              <li>
                We are a center of excellence offering a full spectrum of health
                services, meeting primary care needs to reach every human being
              </li>
              <li>
                <ul className="socials">
                  <IconBrandTwitter
                    width={30}
                    height={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <IconBrandFacebook
                    width={30}
                    height={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <IconBrandInstagram
                    width={30}
                    height={30}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                </ul>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Department</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li className="active">Site Links</li>
              <li>
                <a href="#">Charity</a>
              </li>
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="footer-content__3">
              <li>Have a Questions?</li>
              <li>
                <IconLocation style={{ marginRight: "1rem" }} /> NH 66, North
                Paravur,Kerala 683513
              </li>
              <li>
                <IconPhoneCall style={{ marginRight: "1rem" }} /> 89438 81582
              </li>
              <li>
                <IconMail style={{ marginRight: "1rem" }} />{" "}
                hospitalname@mail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
