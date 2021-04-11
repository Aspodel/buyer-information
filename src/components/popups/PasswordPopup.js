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
    margin-bottom: 40px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 0;
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
  width: ${(props) => props.width || "100%"};

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "password",
}))`
  width: 100%;
  padding: 8px 0;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 0.5px solid #c2c2c2;
  font-size: 18px;
`;

const PasswordPopup = () => {
  return (
    <Popup>
      <Box>
        <h2>Password and Update your Pin</h2>

        <Row>
          <InputContainer>
            <span>Your Old Password</span>
            <Input />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer width="48%">
            <span>New Password</span>
            <Input />
          </InputContainer>

          <InputContainer width="48%">
            <span>Confirm new password</span>
            <Input />
          </InputContainer>
        </Row>

        <Button />
      </Box>
    </Popup>
  );
};

export default PasswordPopup;
