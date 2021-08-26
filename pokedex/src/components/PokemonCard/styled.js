import styled from "styled-components"


export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(3, 1fr);
   gap: 20px;
   margin: 30px;
`

export const CardContainer = styled.div`
   display: flex;
   border: 6px solid #07a0c3;
   width: 17vw;
   height: 47vh;
   border-radius: 20px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-shadow: inset 0 0 1em #07a0c3;
`
export const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #07a0c3;
  border: none;
  justify-content: center;
`
export const Icon = styled.img`
   width: 40px;
   height: 40px;
`

export const Image = styled.div`
   display: flex;
   width: 100%;
   height: 45vh;
   margin: 10px;
   justify-content: center;
   align-items: center;

   img {
       width: 300px;
       height: 300px;
   }
`

export const ContainerButton = styled.div`
   display: flex;
   height: 80px;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   background-color: #07a0c3;

   button {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
   }
`