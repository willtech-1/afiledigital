import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/afiledigital_logo-1.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs"

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* logo */}
            <Link to="home" smooth={true} duration={1000} className="logo-link">
              <img src={logo} alt="web site logo" className="nav-logo" />
            </Link>
            {/* navbar icon */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          {/* nav links */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                Why Choose Us?
              </Link>
            </li>
            <li>
              <Link
                to="ourWork"
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
              >
                <BsFillTelephoneOutboundFill className="cell-no"/> +27 67 782 7144
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
