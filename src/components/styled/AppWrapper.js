import styled from "styled-components";
import theme from "./defaultTheme";

const AppWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  width: 96%;
  border-radius: 10px;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;

export default AppWrapper;
