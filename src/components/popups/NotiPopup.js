import { Switch } from "antd";
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

const Container = styled(Row)`
  width: 50%;
  margin-bottom: 0;
  justify-content: flex-start;

  span {
    margin-left: 10px;
  }
`;

const Toggle = styled.div`
  .ant-switch-checked {
    background-color: #2b74e4;
  }
`;

const NotiPopup = () => {
  return (
    <Popup>
      <Box>
        <h2>Notification setting</h2>
        <Row>
          <Container>
            <Toggle>
              <Switch />
            </Toggle>
            <span>Mute all notification</span>
          </Container>
          <Container>
            <Toggle>
              <Switch defaultChecked />
            </Toggle>
            <span>Mute inbox</span>
          </Container>
        </Row>
        <Row>
          <Container>
            <Toggle>
              <Switch />
            </Toggle>
            <span>Mute new order</span>
          </Container>
          <Container>
            <Toggle>
              <Switch defaultChecked />
            </Toggle>
            <span>Mute dispute</span>
          </Container>
        </Row>

        <Button />
      </Box>
    </Popup>
  );
};

export default NotiPopup;
