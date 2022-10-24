import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactSec,
  ContactContainer,
  ContactHeading,
  ContactWrapper,
  Form,
  NameInput,
  EmailInput,
  SubmitButton,
  SubmitBtn,
  Textarea,
  NameInputDiv,
  EmailInputDiv,
  TextareaDiv,
  NetInput,
  SpanText,
  TelInput,
  TelInputDiv,
} from "./Contact.element";

import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    firstName: "",
    user_email: "",
    tel: "",
    message: "",
  });

  //modal state
  const [modalOpen, setModalOpen] = useState(false);

  //modal text
  const [modalText, setModalText] = useState("");

  //toggle modal
  const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);

  //handleChage
  const handleChange = (e) => {
    setFormValues((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // emaijs
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (formValues.firstName && formValues.message && formValues.tel) {
      setModalOpen(!modalOpen);
      setModalText("Message sent successfully!");
      setFormValues({ firstName: "", user_email: "", message: "", tel: "" });
    } else {
      setModalOpen(true);
      setModalText("Please enter valid values!");
    }
  };
  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text={modalText} />
        )}
      </AnimatePresence>

      <ContactSec id="contact">
        <ContactHeading>Get In Touch</ContactHeading>
        <SpanText>
          Send us a message we'll get back to you within 24 hours!
        </SpanText>
        <ContactContainer>
          <ContactWrapper>
            {/* SEND OR HANDLE CONFIRMATION ON THE SUBMIT BUTTON */}
            <Form ref={form} onSubmit={handleSubmit}>
              {/* <NetInput type="hidden" name="form-name" value="contact v1" /> */}
              <NameInputDiv>
                <NameInput
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formValues.firstName}
                  placeholder="Name"
                />
              </NameInputDiv>

              <TelInputDiv>
                <TelInput
                  type="tel"
                  name="tel"
                  onChange={handleChange}
                  value={formValues.tel}
                  placeholder="Phone Number"
                />
              </TelInputDiv>

              <EmailInputDiv>
                <EmailInput
                  type="email"
                  name="user_email"
                  onChange={handleChange}
                  value={formValues.user_email}
                  placeholder="Email"
                />
              </EmailInputDiv>

              <TextareaDiv>
                <Textarea
                  name="message"
                  onChange={handleChange}
                  value={formValues.message}
                  placeholder="Message"
                />
              </TextareaDiv>
              <SubmitButton>
                <SubmitBtn>Send Message</SubmitBtn>
              </SubmitButton>
            </Form>
          </ContactWrapper>
        </ContactContainer>
      </ContactSec>
    </>
  );
};

export default Contact;
