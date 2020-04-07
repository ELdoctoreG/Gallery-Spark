import React from "react";
import styled from "styled-components";
import PhotoIcon from "../../assets/images/photo.svg";

const Navbar = styled.nav`
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
`;

const Box = styled.div `
width:100%;
display: flex;
justify-content: center;
`

const Logo = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 24px;
  color: #1c1c1c;
  display: flex;
  align-items: center;
`;

const SpanStyled = styled.span`
  font-weight: 300;
`;


const Header = (props) => {
  return (
    <Navbar>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Logo>
            <img alt="logoIcon" src={PhotoIcon} style={{ width: "auto", height: "25px", marginRight: "5px" }}/>
            <SpanStyled>Gallery</SpanStyled>
            Spark
          </Logo>
        </Box>
    </Navbar>
  );
};

export default Header;
