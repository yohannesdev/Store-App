import React from "react";
import styled from "styled-components";
const Footerstyled = styled.div``;
const Top = styled.div`
  background-color: #8aa85d;
  color: black;
  font-size: 25px;
  padding: 40px;
  text-align: center;
`;
const Bottom = styled.div`
  background-color: black;
  padding: 20px;
  color: white;
  text-align: center;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
`;
function Footer() {
  return (
    <Footerstyled>
      <Top>
        <Anchor href="https://www.yohannesweb.com/">
          Created yohannes Areda
        </Anchor>
        <Logo src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></Logo>
      </Top>
      <Bottom>
        <p>&copy;2021FakestorecreatedBy Yohannes Areda</p>
      </Bottom>
    </Footerstyled>
  );
}

export default Footer;
