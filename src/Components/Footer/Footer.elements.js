import styled from "styled-components";
import {
  FaInstagramSquare,

  FaFacebookSquare,
} from "react-icons/fa";

import { SiMicrosoftoutlook } from "react-icons/si"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"

import { IoLogoWhatsapp } from "react-icons/io";


export const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
background-color: whitesmoke;
color: black;
font-family: "Poppins", sans-serif
`

export const FooterWrapper = styled.div`
margin-top: 1rem;
`

export const IconWrapper = styled.span`
  margin: 1rem;
`;

export const InstagramIcon = styled(FaInstagramSquare)`
  color: #fb3958;
  font-size: 1.85rem;
  cursor: pointer;
`;
export const LinkedInIcon = styled(IoLogoWhatsapp)`
  color: #25D366;
  font-size: 1.85rem;
  cursor: pointer;
`;
export const OutlookIcon = styled(SiMicrosoftoutlook)`
  color: rgb(31, 31, 122);
  font-size: 1.85rem;
  cursor: pointer;
`;
export const FacebookIcon = styled(FaFacebookSquare)`
 color: rgb(17, 17, 124);
  font-size: 1.85rem;
  cursor: pointer;
`;

export const TelephoneIcon = styled(BsFillTelephoneOutboundFill)`
color: rgb(20, 20, 43);
  position: relative;
  right: 15px; 
`;

export const FooterText = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: black;
margin-top: 1rem;
`
export const PhoneNumber = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: black;
margin-top: 1rem;

`