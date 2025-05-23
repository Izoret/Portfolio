import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Presentation from "../views/Presentation.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import ProjectDetails from "../views/ProjectDetails.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/presentation",
            name: "presentation",
            component: Presentation,
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects,
        },
        {
            path: "/projects/:id",
            name: "project-details",
            component: ProjectDetails,
        },
    ],
});

export default router;
