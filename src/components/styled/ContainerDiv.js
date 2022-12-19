import styled from "styled-components";
import { width } from "./utils";

const ContainerDiv = styled.div`
  ${width}
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%);
`;

export default ContainerDiv;
