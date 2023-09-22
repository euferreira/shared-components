import React from "react";
import style from "./styles/Appbar.module.scss";

export function SharedAppbar() {
  const listMenu = [
    {
      id: 1,
      name: "Menu 1",
    },
    {
      id: 2,
      name: "Menu 2",
    },
    {
      id: 3,
      name: "Menu 3",
    },
  ];

  return (
    <>
      <div className={style.container_appbar}>
        <span>
          AppBar
        </span>
        <div className={style.list_menu}>
          <ul>
            {listMenu.map((item) => (
              <a href="#">
                <li key={item.id}>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}