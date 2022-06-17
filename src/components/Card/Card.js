import React from "react";
import { Container, Image, Title } from "./styles";
import { FaHeart } from 'react-icons/fa';

export default ({ image, name }) => {
  return (
    <Container>
      {image && <Image src={image} />}
      <Title size={12}>{name}</Title>
      <FaHeart color={'grey'}/>
    </Container>
  );
};
