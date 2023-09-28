import { Outlet } from "react-router-dom";
import Appbar from "../appbar";

export default function Layout() {
    return (
        <>
            <Appbar />
            <Outlet />
        </>
    );
}