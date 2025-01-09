import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
   ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmin: 30, Fmax: 36})};
    text-align: center;
   letter-spacing: 0.08em;
    margin-bottom: 90px;
   
    position: relative;
   
   &::before {
      content: "";
      display: inline-block;
      width: 55px;
      height: 1px;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      
      @media ${theme.media.mobile} {
         bottom: -24px;
      }
   }
   `