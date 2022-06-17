import styled from "styled-components";

export const Container = styled.div`
  width: "100%";
  height: "40px";
  border-radius: "20%";
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
  text-align: center;
`;

export const Image = styled.img`
  width: 200px;
`;
export const Title = styled.h1`
  font-family: "arial", sans-serif;
  font-size: ${(props) => props.size}px;
  padding: 5px;
  width: 200px;
  
`;
