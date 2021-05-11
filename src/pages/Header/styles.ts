import styled from "styled-components";
import { shade } from 'polished';

export const ChatHeader = styled.header`
  box-sizing: border-box;
  max-width: 900px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0px;
  background-color: #298A53;
  color: #fff;
  border-radius: 5px;
`;

export const ChatButton = styled.button`
background-color: transparent;
display: flex;
justify-content: right;
color: #fff;
border: none;
border-radius: 50%;
padding: 1%;
transition: background-color 0.2s;
font-size: 20px;

&:hover {
    background: ${shade(0.1, '#298A53')}
  }



`;
