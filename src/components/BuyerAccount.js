import React from "react";
import styled from "styled-components";
import { FiAirplay, FiBell, FiBook, FiEdit, FiKey } from "react-icons/fi";
import { Danger, TickSquare } from "react-iconly";
import Ava from "./ava.svg";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 100px;

  @media (max-width: 768px) {
    /* height: auto; */
    padding: 10px 20px 30px;
  }
`;

const Content = styled.div`
  width: 1200px;
  margin: auto;

  .hidden-title {
    visibility: hidden;
  }

  @media (max-width: 1250px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 850px) {
    h1 {
      display: none;
    }

    h2 {
      visibility: visible;
    }

    .hidden-title {
      visibility: visible;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: ${(props) => (props.left ? "left" : "space-between")};
  align-items: center;
  padding: 20px 0 10px;
  border-bottom: ${(props) => (props.border ? "0.5px solid #c2c2c2" : "none")};
  width: ${(props) => props.size || "auto"};

  @media (max-width: 768px) {
    align-items: flex-start;

    &.column {
      flex-direction: column;
    }
  }
`;

const Wrapper = styled.div`
  width: 48%;
  border-bottom: ${(props) => (props.border ? "0.5px solid #c2c2c2" : "none")};
  padding-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const Warning = styled.span`
  background-color: #f53535;
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
`;

const Text = styled.span`
  font-size: ${(props) => (props.small ? "16px" : "20px")};
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    font-size: ${(props) => (props.small ? "15px" : "17px")};
  }
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 8px;
  margin-left: ${(props) => (props.marginLeft ? "8px" : "0")};
  display: flex;
  align-items: center;
`;

const CircleIcon = styled(Icon)`
  position: absolute;
  bottom: -8px;
  right: -15px;
  border-radius: 50%;
  background-color: #2b74e4;
  border: 2.5px solid #fff;
  color: #fff;
  height: 30px;
  width: 30px;
  justify-content: center;
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
const Name = styled.h2`
  margin-left: 20px;
  color: #2b74e4;
  width: 40px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 0.5px solid #c2c2c2;
  border-radius: 8px;

  h3 {
    margin: 0;
  }
  span {
    min-width: 90px;
  }

  @media (max-width: 950px) {
    span {
      padding: 3px 10px;
      font-size: 16px;
    }
  }
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    h3 {
      margin-bottom: 10px;
    }
  }
`;

const BuyerAccount = () => {
  return (
    <Page>
      <Content>
        <h1>Information</h1>

        <Row className="column">
          <Wrapper>
            <Row left className="avatar-box">
              <AvatarBox>
                <Avatar />
                <CircleIcon>
                  <FiEdit />
                </CircleIcon>
              </AvatarBox>
              <Name>Brian Cuiquancui</Name>
            </Row>
          </Wrapper>

          <Wrapper>
            <Box>
              <h3>Personal verification - KYC</h3>
              <Warning>Not verify</Warning>
            </Box>
          </Wrapper>
        </Row>

        <h2 className="hidden-title">Information</h2>

        <Row className="column">
          <Wrapper border>
            <Row>
              <Text>
                Email
                <Icon marginLeft>
                  <Danger
                    set="bulk"
                    primaryColor="#fff"
                    secondaryColor="#f53535"
                  />
                </Icon>
              </Text>
              <Text small>
                <Icon>
                  <FiEdit />
                </Icon>
                Edit
              </Text>
            </Row>
            Sample@email.com
          </Wrapper>

          <Wrapper border>
            <Row>
              <Text>
                S??? ??i???n tho???i
                <Icon marginLeft>
                  <TickSquare
                    set="bulk"
                    primaryColor="#fff"
                    secondaryColor="#2b74e4"
                  />
                </Icon>
              </Text>
              <Text small>
                <Icon>
                  <FiEdit />
                </Icon>
                Edit
              </Text>
            </Row>
            +84 90 123 456 789
          </Wrapper>
        </Row>

        <Row border>
          <Text small>Th??ng tin giao h??ng</Text>
          <Text>&gt;</Text>
        </Row>

        <Row border>
          <Text>
            <Icon>
              <FiBell />
            </Icon>
            Notification Settings
          </Text>
          <Text small>
            <Icon>
              <FiEdit />
            </Icon>
            Edit
          </Text>
        </Row>

        <Row border>
          <Text>
            <Icon>
              <FiKey />
            </Icon>
            Password or Upload your Pin
          </Text>
          <Text small>
            <Icon>
              <FiEdit />
            </Icon>
            Edit
          </Text>
        </Row>

        <Row border>
          <Text>
            <Icon>
              <FiBook />
            </Icon>
            Soby Policies & About
          </Text>
          <Text>&gt;</Text>
        </Row>

        <Row border>
          <Text>
            <Icon>
              <FiAirplay />
            </Icon>
            Help center
          </Text>
          <Text>&gt;</Text>
        </Row>
      </Content>
    </Page>
  );
};

export default BuyerAccount;
