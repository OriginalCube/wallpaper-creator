export const useApp = defineStore("app", () => {
  const sideContent = ref<string>("add");

  const changeAddingState = (e: string) => (sideContent.value = e);

  watch(sideContent, () => console.log(sideContent.value));

  return { sideContent, changeAddingState };
});
