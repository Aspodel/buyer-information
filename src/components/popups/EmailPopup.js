import React from "react";
import styled from "styled-components";

const Popup = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #727272;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.form`
  width: 700px;
  padding: 48px 40px;
  background-color: #fff;
  border-radius: 8px;

  h2 {
    margin-bottom: 30px;
  }
`;

const Button = styled.input.attrs((props) => ({
  type: "submit",
  value: "Save",
}))`
  width: 100%;
  background-color: #f1f1f1;
  color: #2b74e4;
  font-weight: 700;
  padding: 14px 0 12px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input.attrs((props) => ({
  type: "email",
}))`
  width: 100%;
  padding: 8px 0;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 0.5px solid #c2c2c2;
  font-size: 18px;
`;

const EmailPopup = () => {
  return (
    <Popup>
      <Box>
        <h2>Edit Email</h2>
        <InputContainer>
          <span>Your current email</span>
          <Input defaultValue="curren@email.com" />
        </InputContainer>

        <InputContainer>
          <span>New email</span>
          <Input placeholder="your-new@email.com" />
        </InputContainer>

        <Button />
      </Box>
    </Popup>
  );
};

export default EmailPopup;
