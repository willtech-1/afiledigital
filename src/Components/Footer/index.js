import React from "react";
import {
  FooterContainer,
  FooterText,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  FooterWrapper,
  IconWrapper,
  OutlookIcon,
  PhoneNumber,
  TelephoneIcon
} from "./Footer.elements";
import ReactWhatsapp from "react-whatsapp"

const Footer = () => {
  return (
    <>
      <FooterContainer>

        <FooterWrapper>
          <IconWrapper>
            <a href="https://www.gmail.com/">
              <OutlookIcon />
            </a>
          </IconWrapper>

          <IconWrapper>
            <ReactWhatsapp number="+27 677827144" message="I want to choose a plan but I have an enquiry">
              <LinkedInIcon />
            </ReactWhatsapp>
          </IconWrapper>

          <IconWrapper>
            <a href="https://www.instagram.com/afile_digital/">
              <InstagramIcon />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://business.facebook.com/home/accounts?business_id=894988544807905">
              <FacebookIcon />
            </a>
          </IconWrapper>

          
          
          <FooterText>COPYRIGHT © 2022 AFILE DIGITAL</FooterText>
          <PhoneNumber><TelephoneIcon />+27 67 782 7144</PhoneNumber>
        </FooterWrapper>
        
      </FooterContainer>
     
    </>
  );
};

export default Footer;