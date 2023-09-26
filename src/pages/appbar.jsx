import React from "react";
import { Container, List, ListElement, ListLink, Title } from "./styles/appbar";

export function SharedAppbar({ title }) {
  const listMenu = [
    {
      id: 1,
      name: "Menu 1",
      href: "#",
    },
    {
      id: 2,
      name: "Menu 2",
      href: "#",
    },
    {
      id: 3,
      name: "Menu 3",
      href: "#",
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Title>{title ?? "Appbar"}</Title>
        <div>
          <List>
            {listMenu.map((item, index) => (
              <ListLink
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Clicked", item.name);
                }}
              >
                <ListElement>{item.name}</ListElement>
              </ListLink>
            ))}
          </List>
        </div>
      </Container>
    </>
  );
}

export function TestAppbar() {
  return <h1>This is a shared appbar component.</h1>;
}
