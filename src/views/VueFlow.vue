<template>
    <div ref="excalidraw" class="w-full h-full">
        <!--        <Excalidraw langCode="zh-CN" />-->
    </div>
</template>

<script setup>
// import { lazyPureReactInVue } from "veaury";
// import excalidraw from "@/views/Excalidraw.jsx";

import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import { default  as SchemaRef } from "@/schema/ref.js";

defineOptions({
    name: "VueFlowPage",
});

const excalidrawRef = useTemplateRef("excalidraw");

/**
 * Excalidraw 参数解释
 *
 * langCode 语言 https://github.com/excalidraw/excalidraw/blob/master/packages/excalidraw/i18n.ts#L19
 * initialData 基础数据
 *  elements 元素数据 可以直接从 Excalidraw 保存文件后将其中的 elements 节点内容拿取即可
 *  appState 应用设置 直接看 https://github.com/excalidraw/excalidraw/blob/master/packages/excalidraw/types.ts#L237 比文档方便
 */

let root; // React 的根实例

// Excalidraw 的初始化配置
const excalidrawOptions = {
    langCode: "zh-CN",
    initialData: {
        elements: SchemaRef,
        appState: {
            viewModeEnabled: true, // 开启只读模式
        },
        scrollToContent: true, // 自动滚动到内容区域
    },
    UIOptions: {
        saveToActiveFile: false, // 禁用保存到文件
    },
};

onMounted(() => {
    if (excalidrawRef.value) {
        root = createRoot(excalidrawRef.value); // 创建 React 根节点
        root.render(
            React.createElement(Excalidraw, excalidrawOptions),
        );
    }
});

onUnmounted(() => {
    if (root) {
        root.unmount(); // 卸载 React 实例
    }
});


</script>

<style scoped>
:deep(.excalidraw .main-menu-trigger) {
    @apply hidden;
}

:deep(.excalidraw .layer-ui__wrapper .layer-ui__wrapper__footer-right) {
    display: none;
}
</style>