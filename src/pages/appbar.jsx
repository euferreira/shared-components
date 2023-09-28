import React from "react";
import {
  Container,
  List,
  ListLink,
  Title,
} from "../styles/appbar";
// import { Link } from "react-router-dom";

export default function Appbar({ title }) {
  const listMenu = [
    {
      id: 1,
      name: "Menu 1",
      href: "/",
    },
    {
      id: 2,
      name: "Menu 2",
      href: "/page2",
    },
    {
      id: 3,
      name: "Menu 3",
      href: "/page3",
    },
  ];

  const navigate = () => {};

  return (
    <>
      <Container>
        <Title>{title ?? "Appbar"}</Title>
        <div>
          <List>
            {listMenu.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                {/* <Link to={item.href} onClick={() => {
                  console.log("navigate to: ", item.href);
                  navigate(item.href);
                }}>
                  <ListLink>{item.name}</ListLink>
                </Link> */}
              </li>
            ))}
          </List>
        </div>
      </Container>
    </>
  );
}
