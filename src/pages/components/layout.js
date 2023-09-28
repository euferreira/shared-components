import { Outlet } from "react-router-dom";
import Appbar from "./appbar";
import React from "react";

export default function Layout() {
    return (
        <>
            <Appbar />
            <Outlet />
        </>
    );
}