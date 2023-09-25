import React from "react";
import StyledList from "./styles/appbar";

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

  return (
    <div>
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "blue",
          marginRight: "1rem",
        }}
      >
        {title ?? "Appbar"}
      </span>
      <div>
        <ul>
          {listMenu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                console.log("Clicked", item.name);
              }}
            >
              <StyledList>{item.name}</StyledList>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TestAppbar() {
  return <h1>This is a shared appbar component.</h1>;
}
