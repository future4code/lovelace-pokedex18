import styled from "styled-components"


export const ContainerHeader = styled.div`
   display: flex;
   border: 1px solid black;
   justify-content: center;
   align-items: center;
   height: 12vh;
   background-color: #07a0c3;

   img {
       height: 100px;
   }
`

export const Button = styled.button`
  display: flex;
  width: 120px;
  height: 50px;
  position: absolute;
  margin-right: 90%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`