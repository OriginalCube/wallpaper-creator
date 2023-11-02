<template>
  <div
    class="min-h-screen w-full bg-white text-black flex items-center justify-center"
  >
    <div class="w-2/3 flex gap-16 justify-between">
      <div class="flex flex-col gap-8">
        <p class="text-6xl font-semibold">Hello,</p>
        <p class="text-3xl font-light text-left">
          Start creating custom wallpaper now! This is still in a beta version
          so changes or bugs can appear. If those issue occurs please create an
          issue in Github and let me know about it.
        </p>
        <div class="flex items-center justify-evenly">
          <UButton icon="i-mdi-github" label="Github" color="gray" size="xl" />
          <NuxtLink
            target="_blank"
            to="https://steamcommunity.com/id/OriginalCube/myworkshopfiles/"
          >
            <UButton
              icon="i-mdi-steam"
              label="Steam Workshops"
              color="gray"
              size="xl"
              @click=""
            />
          </NuxtLink>
          <UButton
            icon="i-mdi-newspaper-plus"
            label="Create Wallpaper"
            color="gray"
            size="xl"
          />
        </div>
      </div>
      <img src="/images/Engine_logo.gif" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
