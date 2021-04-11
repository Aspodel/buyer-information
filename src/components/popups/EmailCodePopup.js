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
  @media (max-width: 700px) {
    width: 100%;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 60px;
  padding: 20px;
  outline: 0;
  border: 0;
  border-radius: 3px;
  border: 0.5px solid #c2c2c2;
  font-size: 18px;
  margin-right: 20px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 48px;
    padding: 15px;
  }
  @media (max-width: 450px) {
    width: 30px;
    padding: 12px;
  }
`;

const EmailCodePopup = () => {
  return (
    <Popup>
      <Box>
        <h2>Verify code</h2>
        <Row>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </Row>
        <span>We already send you a Code to your Email address</span>
        <h4>Send again</h4>
        <Button />
      </Box>
    </Popup>
  );
};

export default EmailCodePopup;
