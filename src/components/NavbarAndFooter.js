import { Outlet } from "react-router-dom";

import Footer from "./Home/footer";
import Header from "./Home/header";

export default function NavbarAndFooter() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
