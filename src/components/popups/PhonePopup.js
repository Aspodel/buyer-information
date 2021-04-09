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

const InputBox = styled.div`
  position: relative;
  display: flex;
  /* align-items: center; */

  span {
    position: absolute;
    top: 49%;
    left: 24px;
    transform: translate(-50%, -50%);
    padding-right: 10px;
    border-right: 2px solid #000;
    box-sizing: border-box;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  padding: 8px 0 8px 55px;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 0.5px solid #c2c2c2;
  font-size: 18px;
`;

const PhonePopup = () => {
  return (
    <Popup>
      <Box>
        <h2>Edit phone numbers</h2>

        <InputContainer>
          <span>Your current phone numbers</span>
          <InputBox>
            <span>+84</span>
            <Input defaultValue="090 123 4567" />
          </InputBox>
        </InputContainer>

        <InputContainer>
          <span>New phone numbers</span>
          <InputBox>
            <span>+84</span>
            <Input placeholder="090 123 4567" />
          </InputBox>
        </InputContainer>
        <Button />
      </Box>
    </Popup>
  );
};

export default PhonePopup;
