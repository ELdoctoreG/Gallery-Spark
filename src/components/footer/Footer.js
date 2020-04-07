import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: #1c1c1c;
  color: #f5f5f5 !important;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  margin-top: auto;
`;

function Copyright() {
  return (
    <p style={{ color: "#F5F5F5", textAlign: "center" }}>
      {"Copyright © "}
      <a style={{ color: "#F5F5F5", textDecoration: "none", textTransform: 'uppercase', letterSpacing: '1.5px' }} href="https://kaapo.studio/" target="_blank" rel="noopener noreferrer">
        Kaapo.Studio
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

export default function Footer() {
  return (
    <FooterStyled>
      <Copyright />
    </FooterStyled>
  );
}
