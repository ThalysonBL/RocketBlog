import React from "react";

import {
  Container,
  ContainerLista,
  ElementList,
  Search,
  ContainerBusca,
  Image,
} from "./styles";
import Logo from "../../assets/logo.svg";
import Busca from "../../assets/search.svg";

export function Header() {
  const estiloColor = {
    color: "#FFFFFF",
    textDecoration: "none",
  };
  const rotas = [
    {
      id: 1,
      rota: (
        <a href="" style={estiloColor}>
          Home
        </a>
      ),
    },
    {
      id: 2,
      rota: (
        <a href="" style={estiloColor}>
          Sobre nós
        </a>
      ),
    },
    {
      id: 3,
      rota: (
        <a href="" style={estiloColor}>
          Categorias
        </a>
      ),
    },
    {
      id: 4,
      rota: (
        <a href="" style={estiloColor}>
          Contato
        </a>
      ),
    },
  ];
  return (
    <Container>
      <img src={Logo} alt="" />
      <ContainerLista>
        {rotas.map((rotas) => {
          return <ElementList key={rotas.id}>{rotas.rota}</ElementList>;
        })}
      </ContainerLista>

      <ContainerBusca>
        <Search type="search" placeholder="Buscar" />
        <Image src={Busca} alt="" />
      </ContainerBusca>
    </Container>
  );
}
