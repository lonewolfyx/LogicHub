<template>
    <a-layout class="layout-demo">
        <a-layout-sider
            hide-trigger
            collapsible
            :collapsed="collapsed"
        >
            <div class="logo">Vue Flow</div>
            <a-menu
                :defaultOpenKeys="['1']"
                :defaultSelectedKeys="['ref']"
                :style="{ width: '100%' }"
                @menuItemClick="onClickMenuItem"
            >
                <a-menu-item v-for="item in menus" :key="item">
                    <IconBranch />
                    {{ item }}
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout class="m-3 p-3">
                <a-layout-content>
                    <RouterView />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script setup>
import { IconBranch } from "@arco-design/web-vue/es/icon";

import { Message } from "@arco-design/web-vue";

const collapsed = ref(false);

const menus = [
    "ref", "reactive", "computed", "watch", "watchEffect", "nextTick", "lifecycle", "render", "h",
];

const onCollapse = () => {
    collapsed.value = !collapsed.value;
};

const onClickMenuItem = (key) => {
    Message.info({ content: `You select ${key}`, showIcon: true });
};

</script>

<style scoped>
.layout-demo {
    @apply h-screen;
    background: var(--color-fill-2);
    border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
    @apply flex items-center justify-center;
    height: 32px;
    margin: 12px 8px;
    background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
    background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
    height: 64px;
    line-height: 64px;
    background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
    height: 48px;
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
}

</style>