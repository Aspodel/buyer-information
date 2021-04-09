import React from "react";
import styled from "styled-components";
import Ava from "../ava.svg";
import { FiEdit } from "react-icons/fi";

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
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Button = styled.input.attrs((props) => ({
  type: "submit",
  value: "Save",
}))`
  width: 100%;
  background-color: #f1f1f1;
  color: #2b74e4;
  font-weight: 700;
  padding: 14px 10px 10px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

const InputContainer = styled.div`
  width: ${(props) => props.width || "100%"};
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  padding: 8px 0;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 0.5px solid #c2c2c2;
  font-size: 18px;
`;

const AvatarBox = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`;

const Avatar = styled.img.attrs((props) => ({
  src: Ava,
}))`
  height: 100%;
  width: 100%;
`;

const EditIcon = styled.div`
  label {
    position: absolute;
    bottom: -8px;
    right: -15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #2b74e4;
    border: 2.5px solid #fff;
    color: #fff;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;

const NamePopup = () => {
  return (
    <Popup>
      <Box>
        <Row>
          <AvatarBox>
            <Avatar />
            <EditIcon>
              <label for="upload-photo">
                <FiEdit />
              </label>
              <input type="file" name="photo" id="upload-photo" />
            </EditIcon>
          </AvatarBox>
          <InputContainer width="80%">
            <span>First name</span>
            <Input placeholder="Brian" />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer width="48%">
            <span>Middle name</span>
            <Input placeholder="Brian Nguyen" />
          </InputContainer>

          <InputContainer width="48%">
            <span>Last name</span>
            <Input placeholder="Brian Nguyen" />
          </InputContainer>
        </Row>
        <Button />
      </Box>
    </Popup>
  );
};

export default NamePopup;
