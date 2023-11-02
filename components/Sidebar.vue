<template>
  <div class="w-1/3 h-full flex items-center">
    <EditModal />
    <EditSidePanel :data="SidePanelActions[app.sideContent]" />
    <EditSideAction />
  </div>
</template>

<script lang="ts" setup>
const app = useApp();

const SidePanelActions = {
  add: {
    buttons: [
      {
        icon: "i-mdi-add",
        iconColor: "white",
        bgColor: "black",
        label: "Add assets",
        action: () => console.log("hello world"),
      },
      {
        icon: "i-mdi-invert-colors",
        iconColor: "white",
        bgColor: "black",
        label: "Customize Colors",
        action: () => console.log("hello world"),
      },
      {
        icon: "i-mdi-rename-box-outline",
        iconColor: "white",
        bgColor: "black",
        label: "Customize Names",
        action: () => console.log("hello world"),
      },
    ],
    addFiles: {
      field: [
        {
          name: "Upload Song",
          type: "uploader",
          positiveBtn: "",
          action: () => console.log("upload"),
        },
        {
          name: "Upload Image",
          type: "uploader",
          positiveBtn: "",
          action: () => console.log("upload"),
        },
      ],
    },
    changeColor: {
      field: [
        {
          name: "Background",
          type: "text",
        },
      ],
    },
  },
};
</script>
