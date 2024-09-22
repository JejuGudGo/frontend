import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/auth/Login.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
