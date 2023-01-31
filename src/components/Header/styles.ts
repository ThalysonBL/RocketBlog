import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 138px;

`;
export const ContainerLista = styled.ul`
  display: flex;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
  list-style-type: none;
`;

export const ElementList = styled.li`
  padding: 0 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

export const ContainerBusca = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Search = styled.input`
  padding: 0 16px;
  border: none;
  width: 230px;
  height: 44px;

  background: #170027;
  border-radius: 4px 0px 0px 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #fbf6ff;
  margin-right: 75px;
  height: 44px;
`;

export const Image = styled.img`
  padding: 10px 28px 9px 26px;
  width: 24px;
  height: 24px;
  position: absolute;
  background: #9e6dc2;
  border-radius: 0px 4px 4px 0px;
`;
