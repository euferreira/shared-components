import React from "react";
//import "./styles/Appbar.scss";

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
      <span className="title__appbar">{title ?? "Appbar"}</span>
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
              <li>{item.name}</li>
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
