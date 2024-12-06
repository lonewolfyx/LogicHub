import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "init",
            component: () => import("@/layout/index.vue"),
            redirect: '/vue',
            children: [
                {
                    path: 'vue',
                    name: 'vue',
                    component: () => import('@/views/VueFlow.vue')
                }
            ]
        }
    ],
});

export default router;
