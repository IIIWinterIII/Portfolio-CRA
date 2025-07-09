import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import { faHome, faUser, faDisplay, faAddressCard } from "@fortawesome/free-solid-svg-icons"

const routes = [
    {
        path: "/",
        component: Home,
        // exact: true,
        name: "Home",
        icons: faHome,
    },
    {
        path: "/about",
        component: About,
        name: "About",
        icons: faUser,
    },
    {
        path: "/projects",
        component: Projects,
        name: "Projects",
        icons: faDisplay,
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
        icons: faAddressCard,
    },
]

export default routes;