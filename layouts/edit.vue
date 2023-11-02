<template>
  <div class="w-full h-screen flex flex-col">
    <Navbar />
    <div class="w-full h-full flex">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>
