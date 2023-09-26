import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;  
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  color: #000;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0 1rem;
  font-weight: 700;
  &:hover {
    color: #000;
  }
`;

const ListElement = styled.li`
  font-weight: 100;
  font-size: 1.5rem;
`;

export { Container, ListElement, Title, List, ListLink };
